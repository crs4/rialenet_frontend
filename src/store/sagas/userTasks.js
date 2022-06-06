import { all, call, takeLatest, put, select, take } from "redux-saga/effects";
import {
    actions as UserTasksActions,
    selectors as UserTasksSelector,
  } from "../slices/userTasks";

export function* sagas() {
   yield takeLatest(UserTasksActions.willLoadTasks.type, willLoadTasks)
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