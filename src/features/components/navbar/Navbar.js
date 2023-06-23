import React from "react";
import { TfiHome } from "react-icons/tfi";
import { HiOutlineCode } from "react-icons/hi";
import { TbChecklist } from "react-icons/tb";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GiPencilRuler } from "react-icons/gi";
import { TiGroupOutline } from "react-icons/ti";
import "../../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="icon-container">
        <TfiHome className="homepage-icon" />
        <div>Home</div>
      </div>
      <div className="icon-container">
        <HiOutlineCode className="software-development-icon" />
        <div>Software development</div>
      </div>
      <div className="icon-container">
        <TbChecklist className="software-testing-icon" />
        <div>Software testing</div>
      </div>
      <div className="icon-container">
        <AiOutlineCloudServer className="devops-icon" />
        <div>DevOps</div>
      </div>
      <div className="icon-container">
        <GiPencilRuler className="design-icon" />
        <div>Design, UX, UI</div>
      </div>
      <div className="icon-container">
        <TiGroupOutline className="product-management-icon" />
        <div>Product management</div>
      </div>
    </div>
  );
}

export default Navbar;
