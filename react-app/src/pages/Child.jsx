import React from "react";

function Child({ props }) {
  return (
    <div>
      <h1>Received {props.name} from parent</h1>
    </div>
  );
}

export default Child;
