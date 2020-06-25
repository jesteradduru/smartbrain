import React from "react";

const Navigation = ({ onRouteChange, route }) => {
  if(route !== "home"){
  return (
    <nav className="text-right p-md-5 text-info d-flex" style={{ fontSize: "1.3em" }}>
      <p className="pointer" onClick={() => onRouteChange("signin")}>Signin</p>
      <p className="pointer ml-5" onClick={() => onRouteChange("register")}>Register</p>
    </nav>
  )}else{
    return (
      <nav className="text-right p-md-5 text-info d-flex" style={{ fontSize: "1.3em" }}>
        <p className="pointer" onClick={() => onRouteChange("signin")}>Signout</p>
      </nav>
    )
  }
};

export default Navigation;
