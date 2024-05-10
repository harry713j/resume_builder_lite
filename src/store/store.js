import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userDetails/userDetailSlice";

const store = configureStore({
  reducer: {
    userDetails: userReducer,
  },
});

export default store;
