import React, { useState, useEffect } from 'react'
import { Button, Collapse, Form, FormText, Card, CardHeader, CardTitle, CardBody, CardFooter, FormGroup, Input, Label } from 'reactstrap'
import {AiOutlineCaretDown,AiOutlineCaretUp } from "react-icons/ai";

const fakeQuestionForm = {
    "taskId": 2131,
    "question": "Che cosa è la tagmentazione?",
    "answers": ["Non lo so", "Ho capito", "Ho bisogno di aiuto"],
    "studentAnswer": { "choice": 1, "comments": "non ci capisco niente" },
    "teacherFeedback": { "comments": "bravo! ma cerca qui..." },
    "closed": true
};

const fakeQuestionForm2 = {
    "taskId": 2131,
    "question": "Che cosa è la tagmentazione?",
    "answers": ["Non lo so", "Ho capito", "Ho bisogno di aiuto"],
    "studentAnswer": { "choice": 1, "comments": "non ci capisco niente" },
    "teacherFeedback": { "comments": "bravo! ma cerca qui..." },
    "closed": true
};


const StudentTransaction = (props) => {

    const getAnswerOption = (group, message) => {
        return <FormGroup check>
            <Input
                name={group}
                type="radio"
            />
            {' '}
            <Label check>
                {message}
            </Label>
        </FormGroup>
    }

    const renderAnswerText = () => {
        return <FormGroup>
            <div style={{ marginTop: "20px" }}>
                <Label for="answerText">
                    <b>Inserisci qui la tua risposta e/o i tuoi commenti</b>
                </Label>
                <Input
                    id="answerText"
                    name="text"
                    type="textarea"
                />
            </div>
        </FormGroup>
    }

    const renderAnswerOptions = (request) => {
        return request && request.answers.map((message) => {
            return getAnswerOption("studentChoice", message);
        })
    }

    return (
        <Form>
            {renderAnswerOptions(fakeQuestionForm)}
            {renderAnswerText()}
        </Form>)
}

export const StudentTask = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const renderTopicContents = (questionContent) => {
        return (
            <Card className="mb-4" style={{ padding: "10px", borderColor: "#007bff" }}>

                <CardHeader style={{ backgroundColor: "#007bff", borderColor: "#007bff", paddingBottom: 0, color: 'white' }}>

                    <CardTitle>
                        <div style={{display:"flex",  justifyContent:"space-between", alignContent:"space-between"}}>
                        {questionContent["question"]}
                        { isOpen ?
                        <AiOutlineCaretUp cursor="pointer" color='white' onClick={() => {toggle()}}></AiOutlineCaretUp> :
                        <AiOutlineCaretDown cursor="pointer" color='white' onClick={() => {toggle()}}></AiOutlineCaretDown>
                        }
                        
                        </div>
                      
                    </CardTitle>
                </CardHeader>
                <Collapse isOpen={isOpen}>
                    <CardBody>
                        <Form>
                            <StudentTransaction />
                            <StudentTransaction />
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <Button color="primary" onClick={(ev) => { }}>Invia</Button>
                    </CardFooter>
                </Collapse>
            </Card>)
    }

    return (
        renderTopicContents(fakeQuestionForm)
    )

}