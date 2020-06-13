import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
const Logo = () => {
  return (
    <Tilt
      className="Tilt ml-md-5"
      options={{ max: 40 }}
      style={{ height: 150, width: 150, cursor: "pointer" }}
    >
      <div
        className="Tilt-inner bg-info d-flex justify-content-center align-items-center shadow"
        style={{ height: 150, width: 150 }}
      >
        <img src={brain} className="img-fluid" alt="logo" />
      </div>
    </Tilt>
  );
};

export default Logo;
