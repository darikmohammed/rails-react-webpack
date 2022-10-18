import { createSlice } from "@reduxjs/toolkit";

import getGreeting from "./GetGreeting";

const initialState = {
  message: "No Message",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: {
    // Get Disney Characters
    [getGreeting.fulfilled]: (state, action) => ({
      ...state,
      message: action.payload,
    }),
    [getGreeting.rejected]: (state) => ({
      ...state,
    }),
  },
});

export default messageSlice.reducer;
