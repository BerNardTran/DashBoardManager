import React from "react";
import Logo from "./../../Asset/logo.webp";
import "./index.scss";

const LogoHeader = () => {
  return (
    <div className="logo-header">
      <img src={Logo} alt="blue" className="logo-image"/>
      <span className="logo-title">HOTASH</span>
    </div>
  );
};

export default LogoHeader;
