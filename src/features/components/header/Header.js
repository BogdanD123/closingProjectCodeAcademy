import React from "react";
import { BsSearch } from "react-icons/bs";
import "../../styles/Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-name-container">
        <div className="logo-name">Codedesk</div>
        <div>&#8482;</div>
      </div>
      <div className="form-container">
        <form className="input-container">
          <button className="search-button">
            <BsSearch className="search-scope" />
          </button>
          <input
            className="input-tag"
            type={"search"}
            placeholder={"Search Codedesk"}
          />
        </form>
      </div>
      <div className="burger-menu-container">
        <div className="burger-menu first-line"></div>
        <div className="burger-menu second-line"></div>
        <div className="burger-menu third-line"></div>
      </div>
    </div>
  );
}

export default Header;
