import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Content } from '../components/Content';
import { selectors as UserTasksSelectors, actions as UserTasksActions } from '../store/slices/userTasks'
import { useSelector, useDispatch } from "react-redux";
import { TaskCreator, TeacherTasksViewer } from '../components/TeacherComponents';
import { StudentsProfileViewer } from '../components/StudentsProfileViewer';

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { fakeTask } from '../components/common';


export const TeacherDashboard = (props) => {
    const userProfile = useSelector(UserTasksSelectors.getUserProfile);
    const [activeTab, setActiveTab] = useState("0");
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });

    useEffect(() => {
        dispatch(UserTasksActions.willGetUserProfile());
        //dispatch(UserTasksActions.willLoadTasks());
      }, [])

    return (
        <>
            <Header className="mb-0 text-white" section="teacher_area" showMenu={true} />
            <SideBar active="teacher_dashboard" role={userProfile != null ? userProfile.role_id : null} />
            <Content>
                <Nav tabs>
                    <NavItem>
                        <NavLink style={activeTab === '0' ?
                            { cursor: "arrow", fontWeight: "bold", background: "#EEEEEE" } : { cursor: "pointer", fontWeight: "normal" }}
                            onClick={() => { setActiveTab('0'); }}
                        >
                            {t("students_answers")}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={activeTab === '1' ?
                            { cursor: "arrow", fontWeight: "bold", background: "#EEEEEE" } : { cursor: "pointer", fontWeight: "normal" }}
                            onClick={() => { setActiveTab('1'); }}
                        >
                            {t("students_profile")}
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="0">
                        <TeacherTasksViewer/>
                    </TabPane>
                    <TabPane tabId="1">
                        <StudentsProfileViewer/>
                    </TabPane>
                </TabContent>

                
            </Content>
        </>
    )
}