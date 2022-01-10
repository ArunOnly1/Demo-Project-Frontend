import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')) || {},
  },
  reducers: {
    addLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload
      localStorage.setItem('loggedInUser', JSON.stringify(state.loggedInUser))
    },
  },
})

export const { addLoggedInUser } = userSlice.actions
export default userSlice.reducer
