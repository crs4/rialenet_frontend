import { all, call, takeLatest, put, select, take } from "redux-saga/effects";
import {
    actions as UserTasksActions,
    selectors as UserTasksSelector,
  } from "../slices/userTasks";
import { push } from 'connected-react-router'
import { createNewTask, createNewTransaction, logout } from "../../api/wenet_api";

export function* sagas() {
  yield takeLatest(UserTasksActions.willGetUserProfile.type, willGetUserProfile)
  yield takeLatest(UserTasksActions.willLogout.type, willLogout)
  yield takeLatest(UserTasksActions.willLoadTasks.type, willLoadTasks) 
  yield takeLatest(UserTasksActions.willLoadStudentsProfile.type, willLoadStudentsProfile) 
  
  yield takeLatest(UserTasksActions.willCreateTask.type, willCreateTask) 
  yield takeLatest(UserTasksActions.willCreateTransaction.type, willCreateTransaction) 
}


function* willLogout(action) {
    yield put(UserTasksActions.didLogout());
   
    const result = yield call(logout)
    console.log("Logout result:", result);
    yield put(push("/"));
  }


  function* willGetUserProfile(action) {
  
    const url = `/userprofile`;
   
    try{
    const response = yield call(() => fetch(url)
    .then(response => response.json())
    .then(myJson => myJson)
    );

    const userProfile = (response == null) ? null : response
    yield put(UserTasksActions.didGetUserProfile(userProfile));
    if (userProfile==null)
    {yield put(push("/logout"));}

    } catch (error) {
      yield put(UserTasksActions.didGetUserProfile(null));
      yield put(push("/"));
    }
}


function* willCreateTask(action) {
  const content = action.payload; 
  yield put(UserTasksActions.setIsSendingMessage(true));
  const result = yield call(createNewTask,content)
  if (result!=null)
  {
    console.log("SAGA2 willCreateTask result OK. Loading tasks...|",result);
    yield put(UserTasksActions.setIsSendingMessage(false)); 
    yield put(UserTasksActions.willLoadTasks()); 
  }
  else{
    console.log("SAGA2 willCreateNewTask error");
    yield put(UserTasksActions.setIsSendingMessage(false)); 
  }
}

function* willCreateTransaction(action) {
  const content = action.payload; 
  yield put(UserTasksActions.setIsSendingMessage(true));
  const result = yield call(createNewTransaction,content)
  if (result!=null)
  {
    console.log("SAGA2 willCreateTransaction result OK. Loading tasks...|",result);
    yield put(UserTasksActions.setIsSendingMessage(false)); 
    yield put(UserTasksActions.willLoadTasks()); 
  }
  else{
    console.log("SAGA2 willCreateTransaction error");
    yield put(UserTasksActions.setIsSendingMessage(false)); 
  }
}



function* willLoadTasks(action) {
  console.log("SAGA2 called willLoadTasks NEW!");
    //const data = action.payload;
    //const passcode = localStorage.getItem("passcode")
    const url = `/tasks`;
   
    try{
    const response = yield call(() => fetch(url)
    .then(response => response.json())
    .then(myJson => myJson)
    );

    const tasks = (response == null) ? [] : response["tasks"]
    const offset =  (response == null) ? 0 : response["offset"]
    const total =  (response == null) ? 0 : response["total"]
    // Ordino i task dal più recente al piu' vecchio
    tasks.sort((t1,t2)=> t2["_creationTs"]- t1["_creationTs"]);

    yield put(UserTasksActions.didLoadTasks({tasks, offset, total}));
  
    } catch (error) {
      yield put(UserTasksActions.didLoadTasks({tasks:[], offset:0, total:0}));
    }
}

function* willLoadStudentsProfile(action) {
  const url = `/students`;
  try{
  const response = yield call(() => fetch(url)
  .then(response => response.json())
  .then(myJson => myJson)
  );
  const studentsProfile = (response == null) ? [] : response;
  yield put(UserTasksActions.didLoadStudentsProfile(studentsProfile));
  } catch (error) {
    yield put(UserTasksActions.didLoadStudentsProfile([]));
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