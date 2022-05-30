import { combineReducers } from 'redux'

import { reducer as passCodeUsersReducer } from './slices/passCodeUsers'
import { connectRouter } from 'connected-react-router'

export const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  passCodeUsers: passCodeUsersReducer
})