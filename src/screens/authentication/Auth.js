import React from "react";
import "./Auth.css";

const Auth = () => {
  const showSignup = () => {
    document.getElementById("signUp").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("btns2").style.backgroundColor = "white";
    document.getElementById("btns1").style.backgroundColor = "#cdb4db";
  };
  const showLogin = () => {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("login").style.display = "flex";
    document.getElementById("btns1").style.backgroundColor = "white";
    document.getElementById("btns2").style.backgroundColor = "#cdb4db";
  };
  return (
    <div className="content">
      <div className="auth-container">
        <div className="authBtn">
          <button className="btn btn1" id="btns1" onClick={showLogin}>
            Login
          </button>
          <button className="btn btn2" id="btns2" onClick={showSignup}>
            Sign Up
          </button>
        </div>
        <div className="loginForm">
          <div id="login" className="loginClass">
            <input
              type="text"
              id="loginUsrname"
              placeholder="Username"
              required
            />
            <br />
            <input type="password" id="loginPswrd" placeholder="Password" />
            <br />
            <div className="enquire">
              <a href="#">
                <input type="checkbox" id="remember" />
                Remember me
              </a>
              <a href="#">Forgot password?</a>
            </div>
            <br />
            <button className="subBtn" type="submit">
              LOGIN
            </button>
            <br />
            <a href="#" onClick={showSignup}>
              No Account? Create one
            </a>
          </div>
          <div id="signUp" className="signupClass">
            <input type="email" id="email" placeholder="Email" required />
            <br />
            <input
              type="text"
              id="signupUsrname"
              placeholder="Username"
              required
            />
            <br />
            <input
              type="password"
              id="signupPswrd"
              placeholder="Password"
              required
            />
            <br />
            <button type="submit" className="signBtn">
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
