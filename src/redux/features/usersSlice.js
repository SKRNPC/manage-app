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
export const addUser = createAsyncThunk(
  "users/addUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/users/add",
        userData
      );
      console.log("Kullanıcı başarıyla eklendi:", response.data);
      return response.data; // API'den dönen kullanıcı verisini döndür
    } catch (error) {
      return rejectWithValue(error.response.data); // Hata durumunda hata mesajını döndür
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data.push(action.payload); // Yeni kullanıcıyı data dizisine ekler.
      });
  },
});

export default usersSlice.reducer;
