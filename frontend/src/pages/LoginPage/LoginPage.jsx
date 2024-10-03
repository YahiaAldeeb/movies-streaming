import React from "react";
import "./SignInPage.css"; // Your external CSS file

const SignInPage = () => {
  return (
    <div className="signin-page">
      <div className="signin-body">
        <form className="signin-form">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="signin-button">Sign In</button>
          <div className="signin-help">
            <div>
              <input type="checkbox" /> Remember me
            </div>
            <div className="help-text">Need help?</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
