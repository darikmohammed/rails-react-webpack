import { createAsyncThunk } from "@reduxjs/toolkit";

const getGreeting = createAsyncThunk("Greeting/getGreeting", async () => {
  const response = fetch("http://127.0.0.1:3000/api/greetings")
    .then((response) => response.json())
    .then((data) => data);
  console.log("message form async thunk", response);
  return response;
});

export default getGreeting;
