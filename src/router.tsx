import React, {useEffect} from "react";

import { ConnectedRouter, push } from 'connected-react-router'

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
  import {AppLoader} from "./components/UtilsComponents";
  import { StudentDashboard } from "./pages/StudentDashboard";
  import { TeacherDashboard } from "./pages/TeacherDashboard";
  import { TeacherTasksViewer } from "./components/TeacherComponents";
  import  {fakeTasks} from './components/common';
  import WenetConnector from "./pages/WenetConnector";
  import { selectors as UserTasksSelectors, actions as UserTasksActions } from './store/slices/userTasks'
  import { Role } from "./constants";

export const AppRouter = () => { 
      
      const userProfile = useSelector(UserTasksSelectors.getUserProfile);
      const dispatch = useDispatch();

      useEffect(() => {

            //@audit UNCOMMENT FOR PRODUCTION!
            dispatch(UserTasksActions.willGetUserProfile(null));
          }, [])

          useEffect(() => {
            console.log("UserProfile in router:", userProfile);
            if (userProfile!=null && userProfile["message"]!=null)
            {
              alert(userProfile["message"])
              dispatch(push("/"))
            }
          }, [userProfile])

  return (<ConnectedRouter history={history}>
  <Switch>
        {/* 
      <Route path="/forum">
          <RialeDiscussionBoard />
    </Route>
    */}

<Route path="/devTasks">
          <TeacherTasksViewer tasks={fakeTasks} />
    </Route>

    <Route path="/student_dashboard">
          { (userProfile==null) ? <AppLoader/> : (
            (userProfile.role_id==Role.student || userProfile.role_id==Role.admin) ?
            <StudentDashboard /> :
            <Redirect to="/" />
          )
          }
          
    </Route>

    <Route path="/teacher_dashboard">
    { (userProfile==null) ? <AppLoader/>  : (
            (userProfile.role_id==Role.teacher || userProfile.role_id==Role.admin) ?
            <TeacherDashboard /> :
            <Redirect to="/" />
          )
          }
    </Route>

    <Route path="/login/:mypasscode">
         <WenetConnector />
    </Route>

    <Route path="/">
    <WenetConnector />
    </Route>
  </Switch>

</ConnectedRouter>)
}