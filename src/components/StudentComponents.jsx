import React, { useState, useEffect } from 'react'
import {
    Button, Collapse, Form, FormText,
    Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
    FormGroup, Input, Label
} from 'reactstrap'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useTranslation } from 'react-i18next';


const StudentTransaction = (props) => {

    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    const transactionOptions = ["cannotAnswer", "needClarification", "notSure", "myAnswer"];

    const [currentSelectedChoice, setCurrentSelectedChoice] = useState(props.transaction.selectedChoiceIndex)
    const [currentSelectedStudentText, setCurrentStudentText] = useState("")

    const onChangeSelectedChoice = (ev) => {
        console.log("selected choice:", ev.target.value);
        setCurrentSelectedChoice(ev.target.value);
    }

    const onChangeStudentText = (ev) => {
        console.log("current text:", ev.target.value);
        setCurrentStudentText(ev.target.value);
    }

    const getAnswerOption = (group, message, index) => {
        return <FormGroup check disabled={props.transaction.readonly}>
            <Input disabled={props.transaction.readonly}
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
        return <FormGroup>
            <div style={{ marginTop: "20px" }}>
                <Label for="studentAnswerText">
                    <b>{t("enterComment")}</b>
                </Label>
                <Input disabled={props.transaction.readonly}
                    id="studentAnswerText"
                    name="text"
                    type="textarea"
                    onChange={(ev) => onChangeStudentText(ev)}
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
                <Input disabled={props.transaction.readonly}
                    id="teacherAnswerText"
                    name="text"
                    type="textarea"
                    value={"RISPOSTA"}
                />
            </div>
        </FormGroup>
    }

    const renderAnswerOptions = () => {
        return transactionOptions.map((message, index) => {
            return getAnswerOption("studentChoice", t(message), index);
        })
    }

    return (
        <Form style={{ border: "1px solid #007bff", padding: "10px", margin: "10px" }}>
            <Label>
                <b>{t("selectAnswer")}</b>
            </Label>
            {renderAnswerOptions()}
            {renderStudentAnswerText()}
            {renderTeacherAnswerText()}
        </Form>)
}

export const StudentTask = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });

    const renderTransactions = () => {

        return props.task.transactions && props.task.transactions.map((transaction) => {
            return <StudentTransaction transaction={transaction} />
        })
    }
    const renderTopicContents = () => {
        const taskTitle = props.task.goal.name;
        const taskDescription = props.task.goal.description;
        return (

            <Card className="mb-4" style={{ padding: "10px", borderColor: "#007bff" }}>

                <CardHeader onClick={() => { toggle() }} style={{ cursor: "pointer", backgroundColor: "#007bff", borderColor: "#007bff", paddingBottom: 0, color: 'white' }}>

                    <CardTitle>
                        <div style={{ display: "flex", justifyContent: "space-between", alignContent: "space-between" }}>
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
                        <Form>
                            {renderTransactions()}
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <Button color="primary" onClick={(ev) => { }}>{t("send")}</Button>
                    </CardFooter>
                </Collapse>
            </Card>)
    }

    return (
        renderTopicContents()
    )

}