import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <h1>I AM PARENT</h1>
      <Child props={{ name: "maneesh" }} />
    </div>
  );
}

export default Parent;
