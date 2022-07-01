import React, { useState, useEffect } from 'react'
import {
    Button, Collapse, Form, Nav, Navbar, NavbarBrand, Badge,
    FormText, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardSubtitle, CardHeader, CardTitle, CardBody, CardFooter, FormGroup, Input, Label
} from 'reactstrap'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

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
import {ActivityButton} from './UtilsComponents';

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
                        <Label style={ props.teacherFeedback==null ? {"color":"#FF0000"} : {"color":"#000000"}}>
                            <b>{transactionActioneer["name"]} {` `} {transactionActioneer["surname"]}
                                {' - '} {moment(props.transaction._creationTs*1000).format("DD/MM/YYYY - HH:mm")}</b>
                        </Label>
                        :
                        <Label>
                            <b>{moment(props.transaction._creationTs*1000).format("DD/MM/YYYY - HH:mm")}</b>
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
                    <Button disabled={currentTaskTitle.trim()=="" || currentTaskDescription.trim()==""}  color="primary" onClick={(ev) => { createNewTask(ev); props.onClose() }}>{t("send")}</Button>
                </div>
            </FormGroup>
        </Form>
    )
}

//@audit Local Frontend DEV
//const tasks = [fakeTask];

export const TeacherTasksViewer = (props) => {

    const userProfile = useSelector(UserTasksSelectors.getUserProfile);
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const tasks = useSelector(UserTasksSelectors.getTasks);
    
    /*
    useEffect(() => {
        dispatch(UserTasksActions.willGetUserProfile());   
    }, [])
    */

    useEffect(() => {

        dispatch(UserTasksActions.willLoadTasks());
        
        const seconds = 10;
        const interval = setInterval(() => {
          console.log(`WillLoad task for teacher every ${seconds} seconds`);
          dispatch(UserTasksActions.willLoadTasks());
        }, seconds*1000);
        return () => clearInterval(interval);
      }, []);

    
    const renderTaskCreator = () => {
        return <Modal isOpen={isOpen}>
            <ModalHeader>{t("new_question")}</ModalHeader>
            <ModalBody>
                <TaskCreator onClose={() => setIsOpen(false)} />
            </ModalBody>
        </Modal>
    }
    const renderTasks = () => {
        return tasks && tasks.map((task, index) => <TeacherTaskViewer task={task} key={index} />)
    }

    const renderHeader = () =>
    {
        return <Navbar style={{ marginTop: "10px" , marginBottom: "10px" }} className="mb-0 text-white" color="primary" light expand="md">
        <NavbarBrand className="text-white font-weight-bold" href="/">{t("answers_and_questions")}</NavbarBrand>
        <Nav className="mr-auto" navbar>
        </Nav>
        <Nav navbar>
            <Button onClick={(ev) => { console.log("Click new Question"); setIsOpen(true) }}
                style={{ height: 34, marginRight: 12, marginTop: 6, marginBottom: 6, borderWidth: 1, borderColor: 'white', borderStyle: 'solid', borderRadius: 4 }} color="primary">
                <FontAwesomeIcon icon={faPlus} />{t("new_question")}</Button>
            <IconButton
                onClick={() => {dispatch(UserTasksActions.willLoadTasks()); }}
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
        <ReactTooltip id="teacherdashboard"/>
    </Navbar>
    }

    return (
        <>
            {renderHeader()}
            {isOpen && renderTaskCreator()}
            {renderTasks()}
        </>
    )
}

export const TeacherTaskViewer = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    const userProfile = useSelector(UserTasksSelectors.getUserProfile);
    const [feedbackTeacherTransactions, setFeedbackTeacherTransactions] = useState({})
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [amountOfFeedbackToSend, setAmountOfFeedbackToSend] = useState(0);

    useEffect(() => {
        const { task } = props;
        console.log("Student task:", task);
        let ftd = {}
        for (let i = 0; i < task.transactions.length; i++) {
            const transactionID = task.transactions[i]["attributes"]["transactionID"];
            if (transactionID != null) {
                ftd[transactionID] = task.transactions[i]
            }
            
        }
            const filteredT = getFilteredTransactions()
            setFilteredTransactions(filteredT);

            console.log("setFeedbackTeacherTransactions to->: ", ftd)
            setFeedbackTeacherTransactions(ftd);

            setAmountOfFeedbackToSend(getAmountOfFeedbackToSend(filteredT, ftd));
    
    }, [props.task])

    const getAmountOfFeedbackToSend = (transactions, feedbackTransactions) =>
    {  
        if (transactions==null || transactions.length<1) return 0;
        const totTransactions = transactions.length;
        const totFeedbackTransactions = Object.keys(feedbackTransactions).length;
        return (totTransactions-totFeedbackTransactions);
    }

    const getFilteredTransactions = () => {
        console.log("Transaction: (Task):", props.task.transactions);
        if (props.task.transactions == null) return [];

        const ft = props.task.transactions.filter((transaction) => {
            console.log("Transaction: (Filter):", transaction);
            // mostro tutte le transactions create dagli compatilmente con le
            // label definite dalla app logic
            return studentsTransactionOptions.includes(transaction["label"])
        })
        // ordinate cronologicamente dalla meno recente alla più recente
        ft.sort((t1, t2) => (t1["_creationTs"] - t2["_creationTs"]))
        return ft
    }

    const renderTransactions = () => {
        //const filteredTransactions = getFilteredTransactions()
        console.log("Transaction: (filter):", filteredTransactions);
        return filteredTransactions.map((transaction, index) => {
            return <TeacherTransaction readonly transaction={transaction}
                teacherFeedback={feedbackTeacherTransactions[transaction["id"]]} key={index} />
        })
    }


    const renderTopicContents = () => {
        const taskTitle = props.task.goal.name;
        const taskDescription = props.task.goal.description;
        const taskCreationDate = moment(props.task._creationTs*1000).format("DD/MM/YYYY - HH:mm")
        return (

            <Card className="mb-4" style={{ padding: "10px", borderColor: "#007bff" }}>

                <CardHeader onClick={() => { toggle() }} style={{ cursor: "pointer", backgroundColor: "#007bff", borderColor: "#007bff", paddingBottom: 0, color: 'white' }}>

                    <CardTitle>
                        <div style={{ display: "flex", justifyContent: "space-between", alignContent: "space-between" }}>
                        { (amountOfFeedbackToSend>0) &&
                            <Badge style={{ margin: '5px', padding: '5px', color: 'white', backgroundColor: "#FF0000" }}>
                                {`${amountOfFeedbackToSend} `}{t("new_messages_from_students")}
                            </Badge>
                            }

                            ({taskCreationDate}) {taskTitle}
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
                        <Form>
                            {renderTransactions()}
                        </Form>
                    </CardBody>
                </Collapse>
            </Card>)
    }

    return (
        renderTopicContents()
    )

}