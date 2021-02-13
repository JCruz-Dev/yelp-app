import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userDataReducer from './slices/userDataReducer'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
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
