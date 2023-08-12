import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineShare } from "react-icons/hi";
import svg from "../../assets/approved.png";
import "../../styles/AdSnippet.css";

function AdSnippet() {
  return (
    <div className="snippet-container">
      <div className="google-">
        <FcGoogle className="google-icon" />
      </div>
      <div className="content">
        <span className="google-title">Google</span>
        <img src={svg} alt="svgIcon" className="svg-icon" />
        <h4>Product Manager</h4>
        <div className="location">
          <span className="location-icon">
            <MdLocationOn />
          </span>
          San Francisco
        </div>
        <div className="adsnippet-text">
          We have an open position at the gMail team. Apply now and help us make
          gMail even better
        </div>
      </div>
      <li>2h ago</li>
      <div className="adsnippet-icons">
        <div>
          <AiOutlineEye />
          <span>1331</span>
        </div>
        <div>
          <AiOutlineHeart />
          <span>752</span>
        </div>
        <div>
          <BsPerson />
          <span>36</span>
        </div>
        <div>
          <HiOutlineShare />
          <span>17</span>
        </div>
      </div>
    </div>
  );
}

export default AdSnippet;
