import { all, call, takeLatest, put, select, take } from "redux-saga/effects";
import {
    actions as UserTasksActions,
    selectors as UserTasksSelector,
  } from "../slices/userTasks";
import { push } from 'connected-react-router'

export function* sagas() {
  yield takeLatest(UserTasksActions.willGetUserProfile.type, willGetUserProfile)
  yield takeLatest(UserTasksActions.willLogout.type, willLogout)
  yield takeLatest(UserTasksActions.willLoadTasks.type, willLoadTasks) 
  yield takeLatest(UserTasksActions.willCreateTask.type, willCreateTask) 
  yield takeLatest(UserTasksActions.willCreateTransaction.type, willCreateTransaction) 
}


function* willLogout(action) {
    yield put(UserTasksActions.didLogout());
    yield put(push("/logout"));
  }


  function* willGetUserProfile(action) {
  
    const url = `/userprofile`;
   
    try{
    const response = yield call(() => fetch(url)
    .then(response => response.json())
    .then(myJson => myJson)
    );

    const userProfile = (response == null) ? [] : response
    yield put(UserTasksActions.didGetUserProfile(userProfile));
    } catch (error) {
      yield put(UserTasksActions.didGetUserProfile(null));
    }
}



function* willCreateTask(action) {

  const url = `/newtask`;
  const content = action.payload; // {"name" : "domanda 1" , "description" ; "Cosa sono i ...?"}
   
    try{
    const response = yield call(() => fetch(url,
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ "content": content })  // {"name" : "nome" , "description" : "..."}
      })
    .then(response => response.json())
    .then(myJson => myJson)
    );
      console.log("SAGA NEW TASK response:", response);
  } catch (error) {
      console.log("SAGA NEW TASK error:".error);
     // yield put(UserTasksActions.didLoadTasks([]));
    }
}

function* willCreateTransaction(action) {

  const url = `/newtransaction`;
  const content = action.payload; // {"taskId" : "xxxx" , "content" : {} }
   
    try{
    const response = yield call(() => fetch(url,
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ "content": content })  // {"taskId" : "xxxx" , 
        //"content" : {"label" :"label", "message" :"myMessage"}}
      })
    .then(response => response.json())
    .then(myJson => myJson)
    );
      console.log("SAGA NEW TRANSACTION response:", response);
  } catch (error) {
      console.log("SAGA NEW TRANSACTION error:".error);
     // yield put(UserTasksActions.didLoadTasks([]));
    }
      
}

function* willLoadTasks(action) {
    //const data = action.payload;
    //const passcode = localStorage.getItem("passcode")
    const url = `/tasks`;
   
    try{
    const response = yield call(() => fetch(url)
    .then(response => response.json())
    .then(myJson => myJson)
    );

    const tasks = (response == null) ? [] : response["tasks"]
    yield put(UserTasksActions.didLoadTasks(tasks));
    } catch (error) {
      yield put(UserTasksActions.didLoadTasks([]));
    }
}


/*
const newTransaction = {
        "taskId": "62a0b984925841535833b690",
        "label": "cannotAnswer",
        "attributes": {
            "reason": "...."
        },
        "actioneerId": "studente",
        "messages": []
     }
     */