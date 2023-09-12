import React from "react";
import "../../styles/AdStats.css";

function AdStats() {
  return (
    <div className="adstats-container">
      <div className="requirements">
        <div className="position-text">
          For this job position is very important to have right motivation and
          to have the right skills and experience for the job
        </div>
        <div className="requierement">Position requerements</div>
        <div>5+ Years of experience in plain JavaScript</div>
        <div className="requierement">Position benefits</div>
        <div>500k yearly sallary +stock options</div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default AdStats;
