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

function* willLoadTasks(action) {
    const data = action.payload;
    const passcode = localStorage.getItem("passcode")
    const url = `/tasks?passcode=${passcode}`;
   
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