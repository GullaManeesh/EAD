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

////

import React, { useState } from "react";
import Child from "./Child.jsx";

const Parent = () => {
  const [value, setValue] = useState(0);

  const inc = () => {
    setValue(value + 1);
  };
  return (
  
    <div>
      <h1>{value}</h1>
      <Child increment={inc} />
    </div>
  );
};

export default Parent;


///

import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [data, setData] = useState("");
  return (
    <div>
      <h1> this is a parent page for props demo</h1>
      <p>the text typed in parent will be visible in the child component</p>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <Child data={data} />
    </div>
  );
}

export default Parent;

