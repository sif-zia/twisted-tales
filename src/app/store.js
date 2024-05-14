import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../slices/navbarSlice";
import counterReducer from "../slices/counterSlice";
import userSlice from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navbarReducer,
    user: userSlice,
  },
});
