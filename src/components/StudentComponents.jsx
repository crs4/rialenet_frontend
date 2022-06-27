import React, { useState, useEffect } from 'react'
import {
    Button, Collapse, Form, FormText,
    Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
    FormGroup, Input, Label
} from 'reactstrap'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { selectors as UserTasksSelectors, actions as UserTasksActions } from '../store/slices/userTasks'
import moment from 'moment';
import {transactionFieldMapper, studentsTransactionOptions} from './common';

const fakeStudentTransactions = [
    {
       "taskId":"62a9ff27925841535833b6a1",
       "label":"needClarification",
       "attributes":{
          "note":"Avrei bisogno di aiuto perchè non ho capito la domanda"
       },
       "actioneerId":"928",
       "messages":[
          
       ],
       "id":"0",
       "_creationTs":1655835879,
       "_lastUpdateTs":1655835879
    },
    {
       "taskId":"62a9ff27925841535833b6a1",
       "label":"notSure",
       "attributes":{
          "note":"Non saprei rispondere"
       },
       "actioneerId":"928",
       "messages":[
          
       ]
    }
]



const StudentTransaction = (props) => {
    
    const {transaction} = props;
    console.log("Transaction: (props) ", transaction);
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    const [currentSelectedChoice, setCurrentSelectedChoice] = useState(transaction==null? -1 : studentsTransactionOptions.indexOf(transaction["label"]))
    const [currentSelectedStudentText, setCurrentStudentText] = 
    useState(transaction==null? "" : transaction["attributes"][transactionFieldMapper[transaction["label"]]])

    const onChangeSelectedChoice = (ev) => {
        console.log("selected choice:", ev.target.value);
        setCurrentSelectedChoice(ev.target.value);
        props.onUpdate && currentSelectedChoice>=0 &&  props.onUpdate(studentsTransactionOptions[currentSelectedChoice],
            currentSelectedStudentText)
    }

    const onChangeStudentText = (ev) => {
        console.log("current text:", ev.target.value);
        setCurrentStudentText(ev.target.value);
        props.onUpdate && currentSelectedChoice>=0 &&  props.onUpdate(studentsTransactionOptions[currentSelectedChoice],
            ev.target.value)
    }

    const getAnswerOption = (group, message, index) => {
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
        const _done = props.readonly ? "_done" : ""
        const choice = `${studentsTransactionOptions[currentSelectedChoice]}${_done}`
        return currentSelectedChoice>=0 && <FormGroup>
            <div style={{ marginTop: "20px" }}>
                <Label for="studentAnswerText">
                    <b>{t(`comment_on_${choice}`)}</b>
                </Label>
                <Input disabled={props.readonly}
                    id="studentAnswerText"
                    name="text"
                    type="textarea"
                    onChange={(ev) => onChangeStudentText(ev)}
                    value={currentSelectedStudentText}
                />
            </div>
        </FormGroup>
    }

    const getTeacherFeedbackContent = () =>
    {
        const {teacherFeedback, transaction} = props;
        if (teacherFeedback==null) return null;
        console.log("TF FeedbackTransaction ID:",teacherFeedback);
        
        const teacherText = teacherFeedback["attributes"][transactionFieldMapper[teacherFeedback["label"]]]
        return teacherText;
    }
    const renderTeacherAnswerText = () => {
        const teacherFeedbackContent = getTeacherFeedbackContent()

        return teacherFeedbackContent &&  <FormGroup>
            <div style={{ marginTop: "20px" }}>
                <Label for="teacherAnswerText">
                    <b>{t("teacherFeedback")}</b>
                </Label>
                <Input disabled={props.readonly}
                    id="teacherAnswerText"
                    name="text"
                    type="textarea"
                    value={teacherFeedbackContent}
                />
            </div>
        </FormGroup>
    }

    const renderAnswerOptions = () => {
        return studentsTransactionOptions.map((message, index) => {
            return getAnswerOption("studentChoice", t(message), index);
        })
    }

    const _done = props.readonly ? "_done" : ""
    const answerLabel = `selectAnswer${_done}`

    return (
        <>
         { props.transaction &&
               <div style={{display:"flex",  justifyContent: "flex-end"}}>
               <Label>
                   <b>{moment(props.transaction._creationTs).format("DD/MM/YYYY - hh:mm")}</b>
               </Label>
               </div>
            }
        <Form style={{ border: "1px solid #007bff", padding: "10px", margin: "10px" }}>
           
           
            <Label>
                <b>{t(answerLabel)}</b>
            </Label>
            {renderAnswerOptions()}
            {renderStudentAnswerText()}
            {renderTeacherAnswerText()}
        </Form>
        </>)
}

export const StudentTask = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    const dispatch = useDispatch();
    const [transactionData, setTransactionData] = useState(null);
    const userProfile = useSelector(UserTasksSelectors.getUserProfile);
    const [feedbackTeacherTransactions, setFeedbackTeacherTransactions] = useState({})

    useEffect(() => {
        const {task} = props;
        console.log("Student task:", task);
        let ftd = {}
        for (let i=0;i<task.transactions.length;i++)
        {
          const transactionID = task.transactions[i]["attributes"]["transactionID"];
          if (transactionID!=null)
          {
              ftd[transactionID] = task.transactions[i]
          }

          console.log("setFeedbackTeacherTransactions to->: ", ftd)
          setFeedbackTeacherTransactions(ftd);
        }

      }, [props.task])

    const createNewTransaction = () =>
    {
        if (transactionData==null) return;
        const taskId = props.task["id"];
        const payload = { "taskId" : taskId, "content" : {"label" :transactionData["label"], 
        "message" : transactionData["message"]}}
        dispatch(UserTasksActions.willCreateTransaction(payload));
       }
    
    const getFilteredTransactions = () =>
    {  
        console.log("Transaction: (Task):", props.task.transactions);
        if (props.task.transactions==null) return [];

        const ft = props.task.transactions.filter((transaction) =>
        {
            console.log("Transaction: (Filter):", transaction);
            // mostro solo le transactions create dallo studente compatilmente con le
            // label definite dalla app logic
            return studentsTransactionOptions.includes(transaction["label"]) 
            && userProfile!=null && userProfile["id"]== transaction["actioneerId"]
            
        })
        // ordinate cronologicamente dalla più recente alla meno recente
        ft.sort((t1,t2) => (t1["_creationTs"]- t2["_creationTs"]))
        return ft
    }

    const renderTransactions = () => {
        const filteredTransactions =  getFilteredTransactions()
        console.log("Transaction: (filtered):", filteredTransactions);
        return filteredTransactions.map((transaction) => {
            return <StudentTransaction readonly transaction={transaction} teacherFeedback={feedbackTeacherTransactions[transaction["id"]]} />
        })
    }

    const renderNewTransaction = () => {
         return <StudentTransaction onUpdate = { (label,message) => setTransactionData({label,message})} />
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
                    <CardFooter>
                        <Button color="primary" onClick={(ev) => {createNewTransaction() }}>{t("send")}</Button>
                    </CardFooter>
                </Collapse>
            </Card>)
    }

    return (
        renderTopicContents()
    )

}