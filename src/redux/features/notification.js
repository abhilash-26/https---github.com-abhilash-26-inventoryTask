import { createSlice } from "@reduxjs/toolkit";

const notification = createSlice({
  name: "notification",
  initialState: {
    notificationBanner: false,
    message: "",
  },
  reducers: {
    setNotification: (state, action) => {
      state.notificationBanner = true;
      state.message = action.payload;
    },
    closeNotification: (state, action) => {
      state.notificationBanner = false;
    },
  },
});

export const { setNotification, closeNotification } = notification.actions;

export default notification.reducer;
