import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Content } from '../components/Content';
import { StudentTask } from '../components/StudentComponents';
import { useSelector, useDispatch } from "react-redux";
import { selectors as UserTasksSelectors, actions as UserTasksActions } from '../store/slices/userTasks'
export const StudentDashboard = (props) => {
    const userProfile = useSelector(UserTasksSelectors.getUserProfile);

    return (
        <>
            <Header className="mb-0 text-white" section="public_area" showMenu={true} />
            <SideBar active="student_dashboard" role={userProfile != null ? userProfile.role_id : null} />
            <Content>
              <StudentTask></StudentTask>
            </Content>
        </>
    )
}