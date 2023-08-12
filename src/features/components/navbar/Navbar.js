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
    setClick(true);
  };

  return (
    <div className="navbar-container">
      <div className="icon-container">
        <TfiHome className="homepage-icon" />
        <NavLink
          to={"/"}
          className={`nav-links ${click === true ? "clicked" : ""}`}
          onClick={handleStateChange}
        >
          Home
        </NavLink>
      </div>
      <div className="icon-container">
        <HiOutlineCode className="software-development-icon" />
        <NavLink to={"*"} className="nav-links">
          Software development
        </NavLink>
      </div>
      <div className="icon-container">
        <TbChecklist className="software-testing-icon" />
        <NavLink to={"*"} className="nav-links">
          Software testing
        </NavLink>
      </div>
      <div className="icon-container">
        <AiOutlineCloudServer className="devops-icon" />
        <NavLink to={"*"} className="nav-links">
          DevOps
        </NavLink>
      </div>
      <div className="icon-container">
        <GiPencilRuler className="design-icon" />
        <NavLink to={"*"} className="nav-links">
          Design, UX, UI
        </NavLink>
      </div>
      <div className="icon-container">
        <TiGroupOutline className="product-management-icon" />
        <NavLink to={"*"} className="nav-links">
          Product management
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
