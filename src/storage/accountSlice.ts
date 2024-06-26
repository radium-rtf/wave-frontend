import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface AccountState {
  avatar?: string
  email?: string
  id?: string
  name?: string
}

const initialState: AccountState = {
  avatar: undefined,
  email: undefined,
  id: undefined,
  name: undefined,
}

const chatWithSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccountData(state, action: PayloadAction<AccountState>) {
      state.avatar = action.payload.avatar
      state.email = action.payload.email
      state.id = action.payload.id
      state.name = action.payload.name
    },
    clearAccountData(state) {
      state.avatar = undefined
      state.email = undefined
      state.id = undefined
      state.name = undefined
    },
  },
})

export const {setAccountData, clearAccountData} = chatWithSlice.actions
export default chatWithSlice.reducer
