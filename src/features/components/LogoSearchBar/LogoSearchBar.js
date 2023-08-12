import React from "react";
import "../../styles/LogoSearchBar.css";
import { BsSearch } from "react-icons/bs";

function LogoSearchBar() {
  return (
    <>
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
    </>
  );
}

export default LogoSearchBar;
