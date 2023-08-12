import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LogoSearchBar from "../LogoSearchBar/LogoSearchBar";

function Header() {
  return (
    <div className="header-container">
      <LogoSearchBar />
      <BurgerMenu />
    </div>
  );
}

export default Header;
