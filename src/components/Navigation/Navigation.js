import React from "react";

const Navigation = ({ onRouteChange, route }) => {
  if (route !== "home") {
    return (
      <nav className="text-right p-md-5 text-info d-flex flex-column flex-md-row justify-content-center" style={{ fontSize: "1.3em" }}>
        <p className="pointer btn border border-info text-info" onClick={() => onRouteChange("signin")}>SINGIN</p>
        <p className="pointer btn border border-info text-info ml-md-5" onClick={() => onRouteChange("register")}>REGISTER</p>
      </nav>
    )
  } else {
    return (
      <nav className="text-right p-md-5 text-info d-flex" style={{ fontSize: "1.3em" }}>
        <p className="pointer btn border border-info text-info btn-block" onClick={() => onRouteChange("signin")}>SINGOUT</p>
      </nav>
    )
  }
};

export default Navigation;
