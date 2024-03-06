import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

export const getUsers = createAsyncThunk("getUsers", async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    return response.data.users;
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
      state.data = action.payload;
    });
  },
});

export default usersSlice.reducer;
