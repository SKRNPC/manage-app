import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import studentReducer from "../features/studentSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    students: studentReducer,
  },
});
