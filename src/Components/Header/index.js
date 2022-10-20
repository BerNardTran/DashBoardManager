import React from "react";
import HeaderLeft from "./headerLeft";
import LogoHeader from "./logo";
import "./index.scss";
const Header = () => {
  return (
    <div className="header-group">
      <LogoHeader />
      <HeaderLeft />
    </div>
  );
};

export default Header;
