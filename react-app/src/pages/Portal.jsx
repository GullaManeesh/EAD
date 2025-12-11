import React, { Children } from "react";
import ReactDOM from "react-dom";

function Portal({ children }) {
  return ReactDOM.createPortal(
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        position: "fixed",
        top: "0",
        left: "40%",
        borderRadius: "20px",
      }}>
      {children}
    </div>,
    document.getElementById("portal-root")
  );
}

export default Portal;
