import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../slices/navbarSlice";
import counterReducer from "../slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navbarReducer,
  },
});
