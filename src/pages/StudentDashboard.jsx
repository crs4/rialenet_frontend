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
    "selectedChoiceIndex" : 1,
    "studentAnswer": { "choice": 1, "comments": "non ci capisco niente" },
    "teacherFeedback": { "comments": "bravo! ma cerca qui..." },
    "readonly" : true
};

const fakeTransaction2 = {
    "taskId": 2131,
    "answers": ["Non lo so", "Ho capito", "Ho bisogno di aiuto"],
    "selectedChoiceIndex" : 0,
    "studentAnswer": { "choice": 1, "comments": "non ci capisco niente" },
    "teacherFeedback": { "comments": "bravo! ma cerca qui..." },
    "readonly": false
};

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

const fakeTask = {
    "id": 2131, "_creationTs":1655308072,"_lastUpdateTs":1655308072, 
    "goal": {
        "name": "Quesito iniziale sulla timeline",
        "description": "Descrizione del questito iniziale della timeline",
        "keywords": ["social interaction", "lab"],
    }, "transactions": fakeStudentTransactions
}


//const tasks = [fakeTask];

export const StudentDashboard = (props) => {
    const userProfile = useSelector(UserTasksSelectors.getUserProfile);
    const tasks =  useSelector(UserTasksSelectors.getTasks);

   
     

    const renderTasks = () =>
    {
        return tasks && tasks.map((task,index) => <StudentTask task={task} />)
    }

    return (
        <>
            <Header className="mb-0 text-white" section="student_area" showMenu={true} />
            <SideBar active="student_dashboard" role={userProfile != null ? userProfile.role_id : null} />
            <Content>
                {renderTasks()}
            </Content>
        </>
    )
}