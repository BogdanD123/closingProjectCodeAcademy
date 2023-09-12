import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/SignUpLoginPopUp.css";

function SignUpLoginPopUp({ handlePopUpLogin }) {
  const [data, setData] = useState("");

  const handleInput = (e) => {
    setData(e.target.value);
  };

  return (
    <>
      <div className="overlay" onClick={handlePopUpLogin}></div>
      <div className="popup-container">
        <div>
          <h4>Login to Codedesk</h4>
          <div className="input-fields">
            <input placeholder="Username" value={data} onChange={handleInput} />
            <input placeholder="Password" />
          </div>
          <div className="continue-button">Continue</div>
          <div>
            <div>
              <input type="checkbox" />
              <span>Remember Me?</span>
            </div>
            <a href="www.google.com">Forgot Password?</a>
          </div>
          <div className="division-line"></div>
          <div>
            <div>Not a member yet?</div>
            <span href="www.youtube.com">Join Now</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpLoginPopUp;
