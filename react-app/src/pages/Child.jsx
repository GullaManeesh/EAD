import React from "react";

function Child({ props }) {
  return (
    <div>
      <h1>Received {props.name} from parent</h1>
    </div>
  );
}

export default Child;

///
import react from "react";

const Child = ({ increment }) => {
  return (
    <div>
      <h1>this is child page</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Child;


 ///
import React from "react";

function Child({ data }) {
  return (
    <div>
      <h1>below is the text typed in parent component</h1>
      <p>{data}</p>
    </div>
  );
}

export default Child;
