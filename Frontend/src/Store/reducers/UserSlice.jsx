/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // users: [], 
  users: null, 
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loaduser: (state,action) => {
      state.users = action.payload;
    },
    removeuser :(state,action) => {
      state.users = null;
    }
  },
})


export default userSlice.reducer;
export const { loaduser , removeuser} = userSlice.actions
