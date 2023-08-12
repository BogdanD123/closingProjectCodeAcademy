import React from "react";
import "../../styles/SignUpLoginPopUp.css";

function SignUpLoginPopUp({ handlePopUpLogin }) {
  return (
    <>
      <div className="overlay" onClick={handlePopUpLogin}></div>
      <div className="popup-container">
        <div>
          <h4>Login to Codedesk</h4>
          <div className="input-fields">
            <input />
            <input />
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
