import { configureStore } from "@reduxjs/toolkit";
import notification from "../features/notification";

const store = configureStore({
  reducer: {
    notification,
  },
});

export default store;
