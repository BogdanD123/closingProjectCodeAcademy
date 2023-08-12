import React from "react";
import "../../styles/SignUpBar.css";
import { FcGoogle } from "react-icons/fc";
import { IoLogoLinkedin } from "react-icons/io";

function SignUpBar({ handlePopUpLogin }) {
  return (
    <div className="signbar-container">
      <h1>Remote hiring made easy.</h1>
      <div className="signup-linkbuttons">
        <div className="linkedin-button">
          <IoLogoLinkedin className="linkedin-icon-button" />
          Sign up with Linkedin
        </div>
        <div className="google-button">
          <FcGoogle className="google-icon-button" />
          Sign up with Google
        </div>
        <div className="division-signin">
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <div className="alternate-signup">Signup with phone or email</div>
        <div className="attention-text">
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </div>
        <h4>Already have an account?</h4>
        <div className="signin-button" onClick={handlePopUpLogin}>
          Sign in
        </div>
        <div className="additional-info">
          <div>&#169; 2022 Codedesk, Inc.</div>
          <div>Apply as developer</div>
          <div>Blog</div>
          <div>Support</div>
        </div>
      </div>
    </div>
  );
}

export default SignUpBar;
