import React, {useEffect} from "react";

import { ConnectedRouter } from 'connected-react-router'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
  } from "react-router-dom";
  import { useSelector, useDispatch } from "react-redux";
  import { history } from './store'
  import RialeDiscussionBoard from './pages/DiscussionDashBoard'
  import { StudentDashboard } from "./pages/StudentDashboard";
  import { TeacherDashboard } from "./pages/TeacherDashboard";
  import WenetConnector from "./pages/WenetConnector";
  import { selectors as UserTasksSelectors, actions as UserTasksActions } from './store/slices/userTasks'
  import { Role } from "./constants";

export const AppRouter = () => { 
      
      const userProfile = useSelector(UserTasksSelectors.getUserProfile);
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(UserTasksActions.willGetUserProfile(null));
          }, [])

          useEffect(() => {
            console.log("UserProfile in router:", userProfile);
          }, [userProfile])

  return (<ConnectedRouter history={history}>
  <Switch>
        {/* 
      <Route path="/forum">
          <RialeDiscussionBoard />
    </Route>
    */}

    <Route path="/student_dashboard">
          { (userProfile==null) ? <p>loading...</p> : (
            (userProfile.role_id==Role.student || userProfile.role_id==Role.admin) ?
            <StudentDashboard /> :
            <Redirect to="/" />
          )
          }
          
    </Route>

    <Route path="/teacher_dashboard">
    { (userProfile==null) ? <p>loading...</p> : (
            (userProfile.role_id==Role.teacher || userProfile.role_id==Role.admin) ?
            <TeacherDashboard /> :
            <Redirect to="/" />
          )
          }
    </Route>

    <Route path="/">
          <WenetConnector />
    </Route>
  </Switch>

</ConnectedRouter>)
}