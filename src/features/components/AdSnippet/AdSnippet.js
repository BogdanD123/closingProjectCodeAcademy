import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdLocationOn } from "react-icons/md";
import svg from "../../assets/approved.png";
import "../../styles/AdSnippet.css";

function AdSnippet() {
  return (
    <div className="snippet-container">
      <FcGoogle className="google-icon" />
      <span>Google</span>
      <img src={svg} alt="svgIcon" className="svg-icon" />
      <h4>Product Manager</h4>
      <div className="location-container">
        <span>
          <MdLocationOn />
        </span>
        San Francisco
      </div>
    </div>
  );
}

export default AdSnippet;
