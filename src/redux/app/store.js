import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import studentReducer from "../features/studentSlice";
import searchReducer from "../features/searchSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    students: studentReducer,
    search: searchReducer,
    auth: authReducer,
  },
});
