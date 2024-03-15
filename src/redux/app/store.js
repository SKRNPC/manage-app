import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import searchReducer from "../features/searchSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,

    search: searchReducer,
    auth: authReducer,
  },
});
