import React from "react";
import { increment, decrement } from "../store/state/createSlice";
import { useSelector, useDispatch } from "react-redux";
const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux ToolKit</h1>
      {count}

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default ReduxCounter;
