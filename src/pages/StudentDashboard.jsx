import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Content } from '../components/Content';
import { StudentTask } from '../components/StudentComponents';
import { useSelector, useDispatch } from "react-redux";
import { selectors as UserTasksSelectors, actions as UserTasksActions } from '../store/slices/userTasks'
import { fakeTask } from '../components/common';


//@audit LocalFrontend
const tasks = [fakeTask];

export const StudentDashboard = (props) => {
    const userProfile = useSelector(UserTasksSelectors.getUserProfile);
    //const tasks =  useSelector(UserTasksSelectors.getTasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UserTasksActions.willGetUserProfile());
        dispatch(UserTasksActions.willLoadTasks());
      }, [])

   
    const renderTasks = () =>
    {
        return tasks && tasks.map((task,index) => <StudentTask task={task} key={index} />)
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