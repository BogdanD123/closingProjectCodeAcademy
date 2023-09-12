import React from "react";
import "../../styles/DetailedInfoAd.css";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

function DetailedInfoAd() {
  return (
    <div className="detailed-info-ad-container">
      <div className="details-content">
        <div className="numbers">
          <span>1331</span>
          <span>752</span>
          <span>36</span>
        </div>
        <div className="icons">
          <AiOutlineEye className="icon" />
          <AiOutlineHeart className="icon" />
          <BsPerson className="icon" />
        </div>
      </div>
      <div>Apply for interview</div>
      <div>
        <div>
          <div>Salary</div>
          <div>$3000-$5000 /month</div>
        </div>
        <div>
          <div>Work type</div>
          <div>Remote</div>
        </div>
      </div>
    </div>
  );
}

export default DetailedInfoAd;
