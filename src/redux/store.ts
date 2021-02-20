import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import AsyncStorage from 'redux-persist/lib/storage'
import userDataReducer from './slices/userDataReducer'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}
const reducer = combineReducers({
  userData: userDataReducer,
})
const persistedReducer = persistReducer(persistConfig, reducer)
export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})
