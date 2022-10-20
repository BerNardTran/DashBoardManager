import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./index.scss";
import { useState } from "react";

const HeaderLeft = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="header-toggle"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <MenuIcon className="menu-icon" />
        ) : (
          <MenuOpenIcon className="menu-open-icon" />
        )}
      </button>
      <div className="header-search">
        <form className="header-search-form">
          <button className="button-search">
            <SearchIcon className="search-icon" />
          </button>
          <input type="search" placeholder="Quick finding..." />
        </form>
      </div>
    </>
  );
};

export default HeaderLeft;
