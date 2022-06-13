import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Content } from '../components/Content';
import { selectors as UserTasksSelectors, actions as UserTasksActions } from '../store/slices/userTasks'
import { useSelector, useDispatch } from "react-redux";


export const TeacherDashboard = (props) => {
    const userProfile = useSelector(UserTasksSelectors.getUserProfile);

    return (
        <>
            <Header className="mb-0 text-white" section="teacher_area" showMenu={true} />
            <SideBar active="teacher_dashboard" role={userProfile != null ? userProfile.role_id : null} />
            <Content>
                <p>To be implemented</p>
            </Content>
        </>
    )
}