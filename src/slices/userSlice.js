import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

// Async thunk for fetching current user data
export const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/user/crr');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Server Error');
    }
  }
);

const initialState = {
  isLoggedIn: false,
  crrUser: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.crrUser = action.payload;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.crrUser = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoggedIn = true;
        state.crrUser = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.isLoggedIn = false;
        state.crrUser = null;
      });
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export const getLoginStatus = (state) => state.user.isLoggedIn;
export const getCurrentUser = (state) => state.user.crrUser;
export const getUserStatus = (state) => state.user.status;
export const getUserError = (state) => state.user.error;

export default userSlice.reducer;
