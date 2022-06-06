import { combineReducers } from 'redux'

import { reducer as userTasksReducer } from './slices/userTasks'
import { connectRouter } from 'connected-react-router'

export const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  userTasks: userTasksReducer
})