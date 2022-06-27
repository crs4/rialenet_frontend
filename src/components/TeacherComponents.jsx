import React, { useState, useEffect } from 'react'
import { Button, Collapse, Form, FormText, Card, CardSubtitle, CardHeader, CardTitle, CardBody, CardFooter, FormGroup, Input, Label } from 'reactstrap'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectors as UserTasksSelectors, actions as UserTasksActions } from '../store/slices/userTasks'
import { transactionFieldMapper, studentsTransactionOptions, teachersTransactionOptions } from './common';
import { fakeTask } from '../components/common';
import moment from 'moment';
import { selectors as StudentsProfileSelector, actions as StudentsProfileAction } from '../store/slices/userTasks'

// link timeline drosophila
//https://beta.riale.ideab3.it/public/a6563273-863b-4e60-8b05-c6b41b332b42

const TeacherFeedback = (props) => 
{
    const { transaction } = props;
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    const [currentSelectedChoice, setCurrentSelectedChoice] = useState(transaction == null ? -1 : teachersTransactionOptions.indexOf(transaction["label"]))
    const [currentSelectedTeacherText, setCurrentTeacherText] =
        useState("") //(transaction == null ? "" : transaction["attributes"][transactionFieldMapper[transaction["label"]]])
    const dispatch = useDispatch();

        const createFeedbackTransaction = () => {
            if (currentSelectedChoice <0) return;
            const taskId = props.transaction["taskId"];
            const payload = {
                "taskId": taskId, "content": {
                    "label": teachersTransactionOptions[currentSelectedChoice],
                    "message": currentSelectedTeacherText,
                    "transactionID" : props.transaction["id"]
                }
            }
            console.log("Feedback payload:", payload);
            //dispatch(UserTasksActions.willCreateTransaction(payload));
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
                    onChange={(ev) => {onChangeTeacherText(ev)}}
                    value={currentSelectedTeacherText}
                />
            </div>
            <div style={{display:"flex" , marginTop:"10px", justifyContent:"flex-end"}}>
                <Button onClick={() => createFeedbackTransaction()} color="primary">{t("send")}</Button>
            </div>
        </FormGroup>
    }

    const getTeacherFeedbackOption = (group, message, index) => {
        return <FormGroup check disabled={props.readonly}>
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
        props.onUpdate && currentSelectedChoice >= 0 && props.onUpdate(teachersTransactionOptions[currentSelectedChoice],
            currentSelectedTeacherText)
    }

    const onChangeTeacherText = (ev) => {
        console.log("current text:", ev.target.value);
        setCurrentTeacherText(ev.target.value);
        props.onUpdate && currentSelectedChoice >= 0 && props.onUpdate(teachersTransactionOptions[currentSelectedChoice],
            ev.target.value)
    }

    return <>
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

    const onChangeStudentText = (ev) => {
        console.log("current text:", ev.target.value);
        setCurrentStudentText(ev.target.value);
        props.onUpdate && currentSelectedChoice >= 0 && props.onUpdate(studentsTransactionOptions[currentSelectedChoice],
            ev.target.value)
    }

    const getStudentAnswerOption = (group, message, index) => {
        return <FormGroup check disabled={props.readonly}>
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
                    onChange={(ev) => {}}
                    value={currentSelectedStudentText}
                />
            </div>
        </FormGroup>
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
                    value={"RISPOSTA"}
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
                        <Label>
                            <b>{transactionActioneer["name"]} {` `} {transactionActioneer["surname"]}
                                {' - '} {moment(props.transaction._creationTs).format("DD/MM/YYYY - hh:mm")}</b>
                        </Label>
                        :
                        <Label>
                            <b>{moment(props.transaction._creationTs).format("DD/MM/YYYY - hh:mm")}</b>
                        </Label>}

               </div>
            }
            <Form style={{ border: "1px solid #007bff", padding: "10px", margin: "10px" }}>


                <Label>
                    <b>{t("teacher_selectAnswer")}</b>
                </Label>
                {renderStudentAnswerOptions()}
                {renderStudentAnswerText()}
                {renderTeacherAnswerText()}
                <TeacherFeedback transaction={props.transaction}/>
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
        <Card className="mb-4" style={{ padding: "10px", borderColor: "#007bff" }}>
            <CardTitle>
                {t("teacherCreateNewTask")}
            </CardTitle>
            <CardBody>
                <Form>
                    <FormGroup>
                        <div style={{ marginTop: "20px" }}>
                            <Label for="teacherTaskTitle">
                                <b>{t("teacherTaskTitle")}</b>
                            </Label>
                            <Input
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
                                <b>{t("teacherTaskDescription")}</b>
                            </Label>
                            <Input
                                id="teacherTaskDescription"
                                name="text"
                                type="textarea"
                                onChange={(ev) => onChangeTaskDescription(ev)}
                                value={currentTaskDescription}
                            />
                        </div>
                    </FormGroup>
                </Form>
            </CardBody>
            <CardFooter>
                <Button color="primary" onClick={(ev) => { createNewTask(ev) }}>{t("send")}</Button>
            </CardFooter>
        </Card>)
}


const tasks = [fakeTask];

export const TeacherTasksViewer = (props) => {
    const userProfile = useSelector(UserTasksSelectors.getUserProfile);
    //const tasks =  useSelector(UserTasksSelectors.getTasks);


    const renderTasks = () => {
        return tasks && tasks.map((task, index) => <TeacherTaskViewer task={task} />)
    }

    return (
        <>
            {renderTasks()}
        </>
    )
}

export const TeacherTaskViewer = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    const dispatch = useDispatch();
    const [transactionData, setTransactionData] = useState(null);
    const userProfile = useSelector(UserTasksSelectors.getUserProfile);

   
    const getFilteredTransactions = () => {
        console.log("Transaction: (Task):", props.task.transactions);
        if (props.task.transactions == null) return [];

        const ft = props.task.transactions.filter((transaction) => {
            console.log("Transaction: (Filter):", transaction);
            // mostro tutte le transactions create dagli compatilmente con le
            // label definite dalla app logic
            return studentsTransactionOptions.includes(transaction["label"])
        })
        // ordinate cronologicamente dalla più recente alla meno recente
        ft.sort((t1, t2) => (t1["_creationTs"] - t2["_creationTs"]))
        return ft
    }

    const renderTransactions = () => {
        const filteredTransactions = getFilteredTransactions()
        console.log("Transaction: (filter):", filteredTransactions);
        return filteredTransactions.map((transaction) => {
            return <TeacherTransaction readonly transaction={transaction} />
        })
    }

    const renderNewTransaction = () => {
        return <TeacherTransaction onUpdate={(label, message) => setTransactionData({ label, message })} />
    }

    const renderTopicContents = () => {
        const taskTitle = props.task.goal.name;
        const taskDescription = props.task.goal.description;
        const taskCreationDate = moment(props.task._creationTs).format("DD/MM/YYYY - hh:mm")
        return (

            <Card className="mb-4" style={{ padding: "10px", borderColor: "#007bff" }}>

                <CardHeader onClick={() => { toggle() }} style={{ cursor: "pointer", backgroundColor: "#007bff", borderColor: "#007bff", paddingBottom: 0, color: 'white' }}>

                    <CardTitle>
                        <div style={{ display: "flex", justifyContent: "space-between", alignContent: "space-between" }}>
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
                            {renderNewTransaction()}
                        </Form>
                    </CardBody>
                </Collapse>
            </Card>)
    }

    return (
        renderTopicContents()
    )

}