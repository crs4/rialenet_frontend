import React, { useState, useEffect } from 'react'
import { Button, Collapse, Form, FormText, Card, CardHeader, CardTitle, CardBody, CardFooter, FormGroup, Input, Label } from 'reactstrap'
import {AiOutlineCaretDown,AiOutlineCaretUp } from "react-icons/ai";



const StudentTransaction = (props) => {

    const getAnswerOption = (group, message) => {
        return <FormGroup check disabled={props.transaction.readonly}>
            <Input disabled={props.transaction.readonly}
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
                <Input disabled={props.transaction.readonly}
                    id="answerText"
                    name="text"
                    type="textarea"
                    value="CIAO!!"
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
            {renderAnswerOptions(props.transaction)}
            {renderAnswerText()}
        </Form>)
}

export const StudentTask = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const renderTransactions = () => {

        return props.task.transactions && props.task.transactions.map((transaction) => {
            return <StudentTransaction transaction={transaction}/>
        })
    }
    const renderTopicContents = () => {
        const question = props.task.goal.name;
        return (
        
            <Card className="mb-4" style={{ padding: "10px", borderColor: "#007bff" }}>

                <CardHeader style={{ backgroundColor: "#007bff", borderColor: "#007bff", paddingBottom: 0, color: 'white' }}>

                    <CardTitle>
                        <div style={{display:"flex",  justifyContent:"space-between", alignContent:"space-between"}}>
                        {question}
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
                          {renderTransactions()}
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <Button color="primary" onClick={(ev) => { }}>Invia</Button>
                    </CardFooter>
                </Collapse>
            </Card>)
    }

    return (
        renderTopicContents()
    )

}