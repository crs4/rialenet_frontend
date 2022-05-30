import { all } from 'redux-saga/effects'
//import { sagas as passCodeUsersSagas } from './passCodeUsers'

function* runAllSagas() {
    console.log('in root saga')
    yield all([
     // passCodeUsersSagas()
    ])
  }

export default runAllSagas;