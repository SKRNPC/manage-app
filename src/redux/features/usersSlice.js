import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
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
export const addUser = createAsyncThunk("users/addUser", async (userData) => {
  try {
    const response = await axios.post(
      "https://dummyjson.com/users/add",
      userData
    );
    console.log("Kullanıcı başarıyla eklendi:", response.data);
    toast.warn(
      `${response.data.firstName} ${
        response.data.lastName
      } was created, ${new Date().toLocaleString()}`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
    return response.data; // API'den dönen kullanıcı verisini döndür
  } catch (error) {
    return error.response.data;
  }
});
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`https://dummyjson.com/users/${id}`);
      toast.warn(
        `${response.data.firstName} ${
          response.data.lastName
        } was deleted, ${new Date().toLocaleString()}`,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      return id; // Silme işlemi başarılıysa, silinen kullanıcının ID'sini döndür
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, ...updateData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://dummyjson.com/users/${id}`,
        updateData
      );
      return response.data; // Güncellenmiş kullanıcı verisini döndür
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchUserById = createAsyncThunk(
  "users/fetchById",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://dummyjson.com/users/${userId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
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
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = state.data.filter((user) => user.id !== action.payload); // Silinen kullanıcıyı state'den kaldır
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload
          ? action.payload.errorMessage
          : action.error.message;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.selectedUser = action.payload; // Seçili kullanıcının bilgileriyle state'i güncelle
      });
  },
});

export default usersSlice.reducer;
