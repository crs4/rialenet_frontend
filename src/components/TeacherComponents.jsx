import React, { useState, useEffect, useRef } from 'react'
import {
    Button, Collapse, Form, Nav, Navbar, NavbarBrand, Badge,
    FormText, Modal, ModalHeader, ModalBody, TabContent, TabPane, NavItem, NavLink,
    Card, CardSubtitle, CardHeader, CardTitle, CardBody, CardFooter, FormGroup, Input, Label
} from 'reactstrap'
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { IconContext } from "react-icons";
import IconButton from '@material-ui/core/IconButton';
import { HiOutlineRefresh } from "react-icons/hi";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectors as UserTasksSelectors, actions as UserTasksActions } from '../store/slices/userTasks'
import { transactionFieldMapper, studentsTransactionOptions, teachersTransactionOptions } from './common';
import { fakeTask } from '../components/common';
import moment from 'moment';
import { selectors as StudentsProfileSelector, actions as StudentsProfileAction } from '../store/slices/userTasks'
import ReactTooltip from "react-tooltip";
import { ActivityButton } from './UtilsComponents';
import { SearchBar } from './SearchBar';
import { TaskTransactionsSummary } from './TaskTransactionsSummary';

// link timeline drosophila

//https://beta.riale.ideab3.it/public/a6563273-863b-4e60-8b05-c6b41b332b42

const TeacherFeedback = (props) => {
    const { transaction } = props;
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    const [currentSelectedChoice, setCurrentSelectedChoice] = useState(transaction == null ? -1 : teachersTransactionOptions.indexOf(transaction["label"]))
    const [currentSelectedTeacherText, setCurrentTeacherText] =
        useState("") //(transaction == null ? "" : transaction["attributes"][transactionFieldMapper[transaction["label"]]])
    const dispatch = useDispatch();


    const createFeedbackTransaction = () => {
        if (currentSelectedChoice < 0) return;
        const taskId = props.transaction["taskId"];
        const payload = {
            "taskId": taskId, "content": {
                "label": teachersTransactionOptions[currentSelectedChoice],
                "message": currentSelectedTeacherText,
                "transactionID": props.transaction["id"]
            }
        }
        console.log("Feedback payload:", payload);
        dispatch(UserTasksActions.willCreateTransaction(payload));
    }

    const renderTeacherFeedbackOptions = () => {
        return teachersTransactionOptions.map((message, index) => {
            return getTeacherFeedbackOption("teacherChoice", t(message), index);
        })
    }

    const renderTeacherAnswerText = () => {
        return currentSelectedChoice >= 0 && <FormGroup>
            <div style={{ marginTop: "20px" }}>
                <Label for="teacherAnswerText">
                    <b>{t(`teacher_comment_on_${teachersTransactionOptions[currentSelectedChoice]}`)}</b>
                </Label>
                <Input disabled={false}
                    id="teacherAnswerText"
                    name="text"
                    type="textarea"
                    onChange={(ev) => { onChangeTeacherText(ev) }}
                    value={currentSelectedTeacherText}
                />
            </div>
            <div style={{ display: "flex", marginTop: "10px", justifyContent: "flex-end" }}>
                <ActivityButton onClick={() => createFeedbackTransaction()} color="primary">{t("send")}</ActivityButton>
            </div>
        </FormGroup>
    }

    const getTeacherFeedbackOption = (group, message, index) => {
        return <FormGroup check disabled={props.readonly} key={index}>
            <Input disabled={props.readonly}
                name={group}
                value={index}
                onChange={(ev) => onChangeSelectedChoice(ev)}
                checked={currentSelectedChoice == index}
                type="radio"
            />
            {' '}
            <Label check>
                {message}
            </Label>
        </FormGroup>
    }

    const onChangeSelectedChoice = (ev) => {
        console.log("selected feedback choice:", ev.target.value);
        setCurrentSelectedChoice(ev.target.value);
        props.onUpdate && currentSelectedChoice >= 0 && props.onUpdate(teachersTransactionOptions[ev.target.value],
            currentSelectedTeacherText)
    }

    const onChangeTeacherText = (ev) => {
        console.log("current text:", ev.target.value);
        setCurrentTeacherText(ev.target.value);
        props.onUpdate && currentSelectedChoice >= 0 && props.onUpdate(teachersTransactionOptions[currentSelectedChoice],
            ev.target.value)
    }

    return <>
        <div style={{ marginTop: "20px" }}>
            <Label><b>{t("send_feedback_to_student")}</b></Label>
        </div>
        {renderTeacherFeedbackOptions()}
        {renderTeacherAnswerText()}
    </>

}

const TeacherTransaction = (props) => {

    const { transaction } = props;
    console.log("Transaction: (props) ", transaction);
    const transactionActioneer = useSelector(StudentsProfileSelector.getStudentDetailsByWenetID(transaction && transaction["actioneerId"]));
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    const [currentSelectedChoice, setCurrentSelectedChoice] = useState(transaction == null ? -1 : studentsTransactionOptions.indexOf(transaction["label"]))
    const [currentSelectedStudentText, setCurrentStudentText] =
        useState(transaction == null ? "" : transaction["attributes"][transactionFieldMapper[transaction["label"]]])

    const onChangeSelectedChoice = (ev) => {
        console.log("selected choice:", ev.target.value);
        setCurrentSelectedChoice(ev.target.value);
        props.onUpdate && currentSelectedChoice >= 0 && props.onUpdate(studentsTransactionOptions[currentSelectedChoice],
            currentSelectedStudentText)
    }

    const getStudentAnswerOption = (group, message, index) => {
        return <FormGroup check disabled={props.readonly} key={index}>
            <Input disabled={props.readonly}
                name={group}
                value={index}
                onChange={(ev) => onChangeSelectedChoice(ev)}
                checked={currentSelectedChoice == index}
                type="radio"
            />
            {' '}
            <Label check>
                {message}
            </Label>
        </FormGroup>
    }

    const renderStudentAnswerText = () => {
        return currentSelectedChoice >= 0 && <FormGroup>
            <div style={{ marginTop: "20px" }}>
                <Label for="studentAnswerText">
                    <b>{t(`teacher_comment_on_${studentsTransactionOptions[currentSelectedChoice]}`)}</b>
                </Label>
                <Input disabled={true}
                    id="studentAnswerText"
                    name="text"
                    type="textarea"
                    onChange={(ev) => { }}
                    value={currentSelectedStudentText}
                />
            </div>
        </FormGroup>
    }

    const getTeacherFeedbackContent = () => {
        const { teacherFeedback, transaction } = props;
        if (teacherFeedback == null) return null;
        console.log("TF FeedbackTransaction ID:", teacherFeedback);

        const teacherText = t(`${teacherFeedback["label"]}`) + " " +
            teacherFeedback["attributes"][transactionFieldMapper[teacherFeedback["label"]]]
        return teacherText;
    }

    const renderTeacherAnswerText = () => {
        return <FormGroup>
            <div style={{ marginTop: "20px" }}>
                <Label for="teacherAnswerText">
                    <b>{t("teacherFeedback")}</b>
                </Label>
                <Input disabled={props.readonly}
                    id="teacherAnswerText"
                    name="text"
                    type="textarea"
                    value={getTeacherFeedbackContent()}
                />
            </div>
        </FormGroup>
    }

    const renderStudentAnswerOptions = () => {
        return studentsTransactionOptions.map((message, index) => {
            return getStudentAnswerOption("studentChoice", t(message), index);
        })
    }

    return (
        <>
            {props.transaction &&
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {transactionActioneer ?
                        <Label style={props.teacherFeedback == null ? { "color": "#FF0000" } : { "color": "#000000" }}>
                            <b>{transactionActioneer["name"]} {` `} {transactionActioneer["surname"]}
                                {` (${transactionActioneer["id"]}) `}
                                {' - '} {moment(props.transaction._creationTs * 1000).format("DD/MM/YYYY - HH:mm")}</b>
                        </Label>
                        :
                        <Label>
                            <b>{moment(props.transaction._creationTs * 1000).format("DD/MM/YYYY - HH:mm")}</b>
                        </Label>}

                </div>
            }
            <Form style={{ border: "1px solid #007bff", padding: "10px", margin: "10px" }}>


                <Label>
                    <b>{t("teacher_selectAnswer")}</b>
                </Label>
                {renderStudentAnswerOptions()}
                {renderStudentAnswerText()}
                {props.teacherFeedback != null ? renderTeacherAnswerText() :
                    <TeacherFeedback transaction={props.transaction} />
                }

            </Form>
        </>)
}

export const TaskCreator = (props) => {
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });

    const [currentTaskTitle, setCurrentTaskTitle] = useState("");
    const [currentTaskDescription, setCurrentTaskDescription] = useState("");
    const dispatch = useDispatch();

    const createNewTask = (ev) => {
        dispatch(UserTasksActions.willCreateTask({
            "name": currentTaskTitle,
            "description": currentTaskDescription
        }))
    }

    const onChangeTaskTitle = (ev) => {
        setCurrentTaskTitle(ev.target.value)
    }

    const onChangeTaskDescription = (ev) => {
        setCurrentTaskDescription(ev.target.value)
    }

    return (

        <Form>
            <FormGroup>
                <div style={{ marginTop: "20px" }}>
                    <Label for="teacherTaskTitle">
                        <b>{t("question_topic")}</b>
                    </Label>
                    <Input
                        required
                        id="teacherTaskTitle"
                        name="text"
                        type="text"
                        onChange={(ev) => onChangeTaskTitle(ev)}
                        value={currentTaskTitle}
                    />
                </div>
            </FormGroup>
            <FormGroup>
                <div style={{ marginTop: "20px" }}>
                    <Label for="teacherTaskDescription">
                        <b>{t("question_content")}</b>
                    </Label>
                    <Input
                        required
                        id="teacherTaskDescription"
                        name="text"
                        type="textarea"
                        onChange={(ev) => onChangeTaskDescription(ev)}
                        value={currentTaskDescription}
                    />
                </div>
            </FormGroup>
            <FormGroup>
                <div style={{ display: "flex", "justifyContent": "space-between" }}>
                    <Button onClick={(ev) => { props.onClose() }}>Annulla</Button>
                    <Button disabled={currentTaskTitle.trim() == "" || currentTaskDescription.trim() == ""} color="primary" onClick={(ev) => { createNewTask(ev); props.onClose() }}>{t("send")}</Button>
                </div>
            </FormGroup>
        </Form>
    )
}


export const TeacherTasksViewer = (props) => {

    const userProfile = useSelector(UserTasksSelectors.getUserProfile);
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const tasks = useSelector(UserTasksSelectors.getTasks);
    const offset = useSelector(UserTasksSelectors.getTasksOffset);
    const limit = useSelector(UserTasksSelectors.getTasksLimit);
    const total = useSelector(UserTasksSelectors.getTasksTotal);
    const filteredIds = useSelector(UserTasksSelectors.getFilteredIds);
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    //@audit decommentare in produzione!
    useEffect(() => {

        dispatch(UserTasksActions.willLoadTasks(null));

        const seconds = 10;
        const interval = setInterval(() => {
            console.log(`WillLoad task for teacher every ${seconds} seconds`);
            dispatch(UserTasksActions.willLoadTasks(null));
        }, seconds * 1000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        if (filteredIds == null) setFilteredTasks(tasks)
        else {
            setFilteredTasks(tasks.filter((task) => filteredIds.includes(task["id"])));
        }

    }, [tasks, filteredIds])


    const renderTaskCreator = () => {
        return <Modal isOpen={isOpen}>
            <ModalHeader>{t("new_question")}</ModalHeader>
            <ModalBody>
                <TaskCreator onClose={() => setIsOpen(false)} />
            </ModalBody>
        </Modal>
    }

    const renderTasks = () => {
        return filteredTasks && filteredTasks.map((task, index) => <TeacherTaskViewer task={task} key={index} />)
    }

    const loadNextTasks = () => {
        if (tasks == null) return;
        // 1-10 di 15 -> newOffset = 0 -> 10
        const newOffset = offset + limit;
        if (newOffset >= total) return;
        dispatch(UserTasksActions.willLoadTasks(newOffset));
    }

    const loadPrevTasks = () => {
        if (tasks == null) return;
        const newOffset = offset - limit;
        if (newOffset < 0) return;
        dispatch(UserTasksActions.willLoadTasks(newOffset));
    }

    const renderOffsetAndTotalTasksBar = () => {
        if (total < 0) return `(${t("loading")})`
        else
            return <span style={{ display: "flex", "justifyContent": "flex-start" }}>
                <AiOutlineCaretLeft size={"1.6em"} cursor="pointer" color='white'
                    onClick={() => { loadPrevTasks() }}>
                </AiOutlineCaretLeft>

                {`${offset + 1}-${offset + tasks.length} ${t("of")} ${total}`}
                <AiOutlineCaretRight size={"1.6em"} cursor="pointer" color='white'
                    onClick={() => { loadNextTasks() }}></AiOutlineCaretRight>

            </span>
    }

    const renderHeader = () => {
        return <Navbar style={{ marginTop: "10px", marginBottom: "10px" }} className="mb-0 text-white" color="primary" light expand="md">
            <NavbarBrand className="text-white font-weight-bold">{t("answers_and_questions")}{` `}{renderOffsetAndTotalTasksBar()}</NavbarBrand>
            <Nav className="mr-auto" navbar>
            </Nav>
            <Nav navbar>
                <Button onClick={(ev) => { console.log("Click new Question"); setIsOpen(true) }}
                    style={{ height: 34, marginRight: 12, marginTop: 6, marginBottom: 6, borderWidth: 1, borderColor: 'white', borderStyle: 'solid', borderRadius: 4 }} color="primary">
                    <FontAwesomeIcon icon={faPlus} />{t("new_question")}</Button>
                <IconButton
                    onClick={() => { dispatch(UserTasksActions.willLoadTasks(0)); }}
                    style={{ height: 34, marginRight: 12, marginTop: 6, marginBottom: 6, borderWidth: 1, borderColor: 'white', borderStyle: 'solid', borderRadius: 4 }}
                >
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <HiOutlineRefresh color="white" data-place="top"
                            data-for="teacherdashboard"
                            data-tip={t("refresh")}
                        />
                    </IconContext.Provider>
                </IconButton>
            </Nav>
            <ReactTooltip id="teacherdashboard" />
        </Navbar>
    }

    return (
        <>
            {renderHeader()}
            <div style={{ margin: "10px" }} >
                <SearchBar tasks={tasks} />
            </div>

            {isOpen && renderTaskCreator()}
            {renderTasks()}
        </>
    )
}

export const TeacherTaskViewer = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    const studentsProfile = useSelector(StudentsProfileSelector.getStudentsProfile);
    // dizionario delle transazioni feedback associate a quelle degli studenti
    const [feedbackTeacherTransactions, setFeedbackTeacherTransactions] = useState({})
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [amountOfFeedbackToSend, setAmountOfFeedbackToSend] = useState(0);
    const [studentsInteractionsSummary, setStudentsInteractionsSummary] = useState({})
    const [activeTab, setActiveTab] = useState("0");
    const [totCompletedTask, setTotCompletedTask] = useState("0");
    useEffect(() => {
        const { task } = props;
        console.log("Student task:", task);
        let ftd = {}
        for (let i = 0; i < task.transactions.length; i++) {
            const transactionID = task.transactions[i]["attributes"]["transactionID"];
            // se la transazione ha l'attributo transactionID allora si tratta del 
            // feedback ad uno studente
            if (transactionID != null) {
                ftd[transactionID] = task.transactions[i]
            }

        }
        const filteredT = getFilteredTransactions()
        setFilteredTransactions(filteredT);

        console.log("setFeedbackTeacherTransactions to->: ", ftd)
        setFeedbackTeacherTransactions(ftd);

        setAmountOfFeedbackToSend(getAmountOfFeedbackToSend(filteredT, ftd));
        const result = getStudentsInteractionsSummary()
        console.log("summary (FR)", JSON.stringify(result))
        if (result != null) {
            setStudentsInteractionsSummary(result["summary"]);
            setTotCompletedTask(result["totCompleted"]);
        }

    }, [props.task])

    // restituisce il numero di transazioni degli studenti per le quali il 
    // docente non ha ancora creato un feedback
    const getAmountOfFeedbackToSend = (transactions, feedbackTransactions) => {
        if (transactions == null || transactions.length < 1) return 0;
        const totTransactions = transactions.length;
        const totFeedbackTransactions = Object.keys(feedbackTransactions).length;
        return (totTransactions - totFeedbackTransactions);
    }

    // restituisce le transazioni degli studenti (le rimanenti sono quelle dei feedback del docente)
    const getFilteredTransactions = () => {
        console.log("Transaction: (Task):", props.task.transactions);
        if (props.task.transactions == null) return [];

        const ft = props.task.transactions.filter((transaction) => {
            console.log("Transaction: (Filter):", transaction);
            // mostro tutte le transactions create dagli studenti compatibilmente con le
            // label definite dalla app logic
            // le transazioni rimanenti sono quelle relative ai feedback dei docenti
            return studentsTransactionOptions.includes(transaction["label"])
        })
        // ordinate cronologicamente dalla meno recente alla più recente
        ft.sort((t1, t2) => (t1["_creationTs"] - t2["_creationTs"]))
        return ft
    }

    const getStudentsInteractionsSummary = () => {
        let summary = {}
        let totalCompleted = 0;
        // ciclo su tutte le transazioni degli studenti
        // e le conto come interazioni associate all'actioneer 
        // della transaction
        console.log("DS: numero delle transazioni:", filteredTransactions.length);
        for (let i = 0; i < filteredTransactions.length; i++) {
            const studentWenetId = filteredTransactions[i]["actioneerId"]
            console.log("DS: transaction StudentWenet ID:", studentWenetId);
            if (summary[studentWenetId] == null) summary[studentWenetId] = { "interactions": 1, "feedbacks": 0, "completed": false };
            else summary[studentWenetId]["interactions"] += 1

            // verifico se esiste un feedback associato alla transazione corrente
            const teacherFeedback = feedbackTeacherTransactions[filteredTransactions[i]["id"]]
            console.log(`DS: teacherFeedback for user ${studentWenetId}:`, JSON.stringify(teacherFeedback))
            if (teacherFeedback != null) {
                const completed = (teacherFeedback["label"] == "rightAnswer");
                summary[studentWenetId]["feedbacks"] += 1;
                summary[studentWenetId]["completed"] = summary[studentWenetId]["completed"] || completed;
            }
            if (summary[studentWenetId]["completed"]) totalCompleted += 1
        }
        console.log("DS: Summary (F)", JSON.stringify(summary));
        return { "summary": summary, "totCompleted": totalCompleted };
    }

    const renderTotalCompletedBadge = () => {
        const total = (studentsProfile != null ? studentsProfile.length : 0);
        const bcolor = totCompletedTask < total ? "primary" : "success";
        const bText = `${totCompletedTask} ${t("of")} ${total} ${t("completed")}`
        return <Badge color={bcolor}>{bText}</Badge>
    }

    const renderTransactions = () => {
        console.log("Transaction: (filter):", filteredTransactions);
        return filteredTransactions.map((transaction, index) => {
            return <TeacherTransaction readonly transaction={transaction}
                teacherFeedback={feedbackTeacherTransactions[transaction["id"]]} key={index} />
        })
    }


    const renderTopicContents = () => {
        const taskTitle = props.task.goal.name;
        const taskDescription = props.task.goal.description;
        const taskCreationDate = moment(props.task._creationTs * 1000).format("DD/MM/YYYY - HH:mm")
        return (

            <Card className="mb-4" style={{ padding: "10px", borderColor: "#007bff" }}>

                <CardHeader onClick={() => { toggle() }} style={{ cursor: "pointer", backgroundColor: "#007bff", borderColor: "#007bff", paddingBottom: 0, color: 'white' }}>

                    <CardTitle>
                        <div style={{ display: "flex", justifyContent: "space-between", alignContent: "space-between" }}>
                            <div style={{ display: "flex", "justifyContent": "flex-start" }}>
                                {renderTotalCompletedBadge()}
                                { (amountOfFeedbackToSend > 0) &&
                                        <Badge style={{ margin: '5px', padding: '5px', color: 'white', backgroundColor: "#FF0000" }}>
                                            {`${amountOfFeedbackToSend} `}{t("new_messages_from_students")}
                                        </Badge>
                                }
                                </div>

                            {taskCreationDate} 
                            {taskTitle}
                            
                            {isOpen ?
                                <AiOutlineCaretUp size={"1.6em"} cursor="pointer" color='white' onClick={() => { toggle() }}></AiOutlineCaretUp> :
                                <AiOutlineCaretDown size={"1.6em"} cursor="pointer" color='white' onClick={() => { toggle() }}></AiOutlineCaretDown>
                            }

                        </div>

                    </CardTitle>

                </CardHeader>
                <Collapse isOpen={isOpen}>
                    {taskDescription &&
                        <CardSubtitle style={{ padding: "10px", margin: "10px", backgroundColor: "#EEEEEE", }}>
                            {taskDescription}
                        </CardSubtitle>
                    }

                    <CardBody>

                        <Nav tabs>
                            <NavItem>
                                <NavLink style={activeTab === '0' ?
                                    { cursor: "arrow", fontWeight: "bold", background: "#EEEEEE" } : { cursor: "pointer", fontWeight: "normal" }}
                                    onClick={() => { setActiveTab('0'); }}
                                >
                                    {t("interactions_with_students")}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={activeTab === '1' ?
                                    { cursor: "arrow", fontWeight: "bold", background: "#EEEEEE" } : { cursor: "pointer", fontWeight: "normal" }}
                                    onClick={() => { setActiveTab('1'); }}
                                >
                                    {t("summary")}
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="0">
                                <Form>
                                    {renderTransactions()}
                                </Form>
                            </TabPane>
                            <TabPane tabId="1">
                                <TaskTransactionsSummary summary={studentsInteractionsSummary} />
                            </TabPane>
                        </TabContent>

                    </CardBody>
                </Collapse>
            </Card>)
    }

    return (
        renderTopicContents()
    )

}