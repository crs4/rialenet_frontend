import React, { useState, useEffect } from 'react'
import { Button, Collapse, Form, FormText, Card, CardHeader, CardTitle, CardBody, CardFooter, FormGroup, Input, Label } from 'reactstrap'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {actions as UserTaskAction} from '../store/slices/userTasks';
// link timeline drosophila
//https://beta.riale.ideab3.it/public/a6563273-863b-4e60-8b05-c6b41b332b42



export const TaskCreator = (props) => 
{
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });

    const [currentTaskTitle,setCurrentTaskTitle] = useState("");
    const [currentTaskDescription,setCurrentTaskDescription] = useState("");
    const dispatch = useDispatch();

    const createNewTask = (ev) => 
    {
        dispatch(UserTaskAction.willCreateTask({"name" : currentTaskTitle,    
                                          "description" : currentTaskDescription}))
    }

    const onChangeTaskTitle = (ev) =>
    {
        setCurrentTaskTitle(ev.target.value)
    }

    const onChangeTaskDescription = (ev) =>
    {
        setCurrentTaskDescription(ev.target.value)
    }

    return (
    <Card className="mb-4" style={{ padding: "10px",  borderColor: "#007bff"}}>
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
                    onChange = {(ev) => onChangeTaskTitle(ev)}
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
                    onChange = {(ev) => onChangeTaskDescription(ev)}
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

export const TaskViewer = (props) => {
    return <></>
}