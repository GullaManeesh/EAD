import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Portal from "./Portal";

function Home() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <div className="box">
      <a style={{ cursor: "pointer" }} onClick={() => navigate("/counter")}>
        COUNTER
      </a>
      <a style={{ cursor: "pointer" }} onClick={() => navigate("/count")}>
        COUNT
      </a>
      <a style={{ cursor: "pointer" }} onClick={() => navigate("/parent")}>
        PARENT
      </a>
      <a style={{ cursor: "pointer" }} onClick={() => navigate("/child")}>
        CHILD
      </a>
      <a style={{ cursor: "pointer" }} onClick={() => navigate("/pagination")}>
        PAGINATION
      </a>
      <a style={{ cursor: "pointer" }} onClick={() => navigate("/table")}>
        table
      </a>
      <a style={{ cursor: "pointer" }} onClick={() => setShow((prev) => !prev)}>
        PORTAL
      </a>

      {show && (
        <Portal>
          <h1>this is a portal</h1>
          <button onClick={() => setShow((prev) => !prev)}>close</button>
        </Portal>
      )}
    </div>
  );
}

export default Home;
