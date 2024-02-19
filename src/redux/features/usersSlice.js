import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
};

export const getUsers = createAsyncThunk("getUsers", async () => {
  try {
    const { data } = await axios.get("https://dummyjson.com/users");
    return data;
  } catch (error) {
    console.error("Error fetching users data:", error);
    throw error;
  }
});
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;
