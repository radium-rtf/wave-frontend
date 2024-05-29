import {configureStore} from '@reduxjs/toolkit'
import accountReducer from './accountSlice'
import chatWithReducer from './chatWithSlice'

const store = configureStore({
  reducer: {
    account: accountReducer,
    chatWith: chatWithReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
