import React from "react";
import svg from "../../assets/approved.png";
import { FcGoogle } from "react-icons/fc";
import { MdLocationOn } from "react-icons/md";
import "../../styles/Snippet.css";

function Snippet() {
  return (
    <div className="single-ad-page-snippet-container">
      <section className="snippet-single-ad-page">
        <div className="google-icon">
          <FcGoogle className="google-icon-svg" />
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
          <div className="single-ad-page-snippet-text">
            We have an open position at the gMail team. Apply now and help us
            make gMail even better. We offer you the change to work on our team
            of developers that will make a big difference in the world
          </div>
        </div>
        <li className="single-ad-page-time">2h ago</li>
      </section>
    </div>
  );
}

export default Snippet;
