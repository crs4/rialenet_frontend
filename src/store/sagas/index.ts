import { all } from 'redux-saga/effects'
import { sagas as userTasksSagas } from './userTasks'

function* runAllSagas() {
    console.log('in root saga')
    yield all([
       userTasksSagas()
    ])
  }

export default runAllSagas;