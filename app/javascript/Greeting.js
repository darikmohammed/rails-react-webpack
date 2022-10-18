import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getGreeting from "./Redux/Greeting/GetGreeting";

function Greeting() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.Greeting);
  console.log(message.message.message);
  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <div>
      <h1>Generated Greeting:</h1>
      <p>{message.message.message}</p>
    </div>
  );
}

export default Greeting;
