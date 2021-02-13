import { createSlice } from '@reduxjs/toolkit'
import { PayloadActionString, PayloadActionObject } from '../../typescript/types/index'

const userDataReducer = createSlice({
  name: 'userData',
  initialState: {
    queryData: [],
    selectedItem: '',
  },
  reducers: {
    saveData: (state, action: PayloadActionObject) => {
      state.queryData = action.payload
    },
    setViewed: (state, action: PayloadActionString) => {
      //Copy State
      const newState = [...state.queryData]
      //Find object selected on state
      const itemIndex = newState.findIndex((item) => item.id === action.payload)
      //Get object
      const itemFinded = newState[itemIndex]
      //add property to selected item
      itemFinded.viewed = true
      //set new State to original state and save selected item
      state.queryData = newState
      state.selectedItem = action.payload
    },
  },
})
export const { saveData, setViewed } = userDataReducer.actions
export default userDataReducer.reducer
