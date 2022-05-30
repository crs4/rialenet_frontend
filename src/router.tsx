import React from "react";
import { ConnectedRouter } from 'connected-react-router'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
  } from "react-router-dom";
  import { useSelector } from "react-redux";
  import { history } from './store'
  
  import RialeDiscussionBoard from './pages/DiscussionDashBoard'
  import WenetConnector from "./pages/WenetConnector";
export const AppRouter = () => { 
  return (<ConnectedRouter history={history}>
  <Switch>
  <Route path="/forum">
          <RialeDiscussionBoard />
    </Route>

    <Route path="/">
          <WenetConnector />
    </Route>
  </Switch>

</ConnectedRouter>)
}