import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Content } from '../components/Content';
import { StudentTask } from '../components/StudentComponents';
import { useSelector, useDispatch } from "react-redux";
import { selectors as UserTasksSelectors, actions as UserTasksActions } from '../store/slices/userTasks'

const fakeTransaction1 = {
    "taskId": 2131,
    "answers": ["Non lo so", "Ho capito", "Ho bisogno di aiuto"],
    "studentAnswer": { "choice": 1, "comments": "non ci capisco niente" },
    "teacherFeedback": { "comments": "bravo! ma cerca qui..." },
    "readonly" : true
};

const fakeTransaction2 = {
    "taskId": 2131,
    "answers": ["Non lo so", "Ho capito", "Ho bisogno di aiuto"],
    "studentAnswer": { "choice": 1, "comments": "non ci capisco niente" },
    "teacherFeedback": { "comments": "bravo! ma cerca qui..." },
    "readonly": false
};

const fakeTask = {
    "id": 2131, "goal": {
        "name": "Quesito iniziale sulla timeline",
        "description": "Descrizione del questito iniziale della timeline",
        "keywords": ["social interaction", "lab"]
    }, "transactions": [fakeTransaction1, fakeTransaction2]
}


const tasks = [fakeTask];

export const StudentDashboard = (props) => {
    const userProfile = useSelector(UserTasksSelectors.getUserProfile);

    return (
        <>
            <Header className="mb-0 text-white" section="student_area" showMenu={true} />
            <SideBar active="student_dashboard" role={userProfile != null ? userProfile.role_id : null} />
            <Content>
                <StudentTask task={fakeTask} />
            </Content>
        </>
    )
}