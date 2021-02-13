import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userDataReducer from './slices/userDataReducer'

const reducer = combineReducers({
  userData: userDataReducer,
})
export default configureStore({
  reducer,
})
