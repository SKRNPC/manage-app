import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: [],
  },
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.list = state.list.filter(
        (student, index) => index !== action.payload
      );
    },
  },
});

export const { addStudent, removeStudent } = studentSlice.actions;

export default studentSlice.reducer;
