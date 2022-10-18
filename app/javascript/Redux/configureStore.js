import { configureStore } from "@reduxjs/toolkit";
import Greeting from "./Greeting/Greeting";

const store = configureStore({
  reducer: {
    Greeting,
  },
});

export default store;
