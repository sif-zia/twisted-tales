import { createSlice } from '@reduxjs/toolkit';
import api from '../api/api';


const initialState = {
  isLoggedIn: false,
  crrUser: null,
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

});

export const { loginUser, logoutUser } = userSlice.actions;
export const getLoginStatus = (state) => state.user.isLoggedIn;
export const getCrrUser = (state) => state.user.crrUser;

export default userSlice.reducer;
