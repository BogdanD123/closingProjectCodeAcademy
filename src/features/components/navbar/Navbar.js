import React, { useState } from "react";
import { TfiHome } from "react-icons/tfi";
import { HiOutlineCode } from "react-icons/hi";
import { TbChecklist } from "react-icons/tb";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GiPencilRuler } from "react-icons/gi";
import { TiGroupOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleStateChange = () => {
    setClick(!click);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-buttons">
        <TfiHome className="homepage-icon" />
        <NavLink to={"/"} className="nav-links" onClick={handleStateChange}>
          Home
        </NavLink>
      </div>
      <div className="navbar-buttons">
        <HiOutlineCode className="software-development-icon" />
        <NavLink to={"*"} className="nav-links">
          Software development
        </NavLink>
      </div>
      <div className="navbar-buttons">
        <TbChecklist className="software-testing-icon" />
        <NavLink to={"*"} className="nav-links">
          Software testing
        </NavLink>
      </div>
      <div className="navbar-buttons">
        <AiOutlineCloudServer className="devops-icon" />
        <NavLink to={"*"} className="nav-links">
          DevOps
        </NavLink>
      </div>
      <div className="navbar-buttons">
        <GiPencilRuler className="design-icon" />
        <NavLink to={"*"} className="nav-links">
          Design, UX, UI
        </NavLink>
      </div>
      <div className="navbar-buttons">
        <TiGroupOutline className="product-management-icon" />
        <NavLink to={"*"} className="nav-links">
          Product management
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
