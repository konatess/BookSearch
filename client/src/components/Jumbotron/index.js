import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return <div className="jumbotron bg-transparent border border-info mt-4">{children}</div>;
}

export default Jumbotron;
