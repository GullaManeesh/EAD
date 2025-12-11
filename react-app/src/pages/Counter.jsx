import React from "react";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => setValue(0)}>reset</button>
    </div>
  );
};

export default Counter;
