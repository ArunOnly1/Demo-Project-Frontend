import { createSlice } from '@reduxjs/toolkit'

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    courseDeleted: false,
    courseCreated: false,
    pageNumber: 1,
  },
  reducers: {
    isCourseDeleted: (state) => {
      state.courseDeleted = !state.courseDeleted
    },
    isCourseCreated: (state) => {
      state.courseDeleted = !state.courseDeleted
    },
    changePageNumber: (state, action) => {
      state.pageNumber = action.payload
    },
  },
})

export const { isCourseDeleted, isCourseCreated, changePageNumber } =
  courseSlice.actions
export default courseSlice.reducer
