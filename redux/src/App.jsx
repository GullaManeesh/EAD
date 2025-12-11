import React from "react";
import { increment, decrement, reset } from "./counterSlice.js";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default App;
