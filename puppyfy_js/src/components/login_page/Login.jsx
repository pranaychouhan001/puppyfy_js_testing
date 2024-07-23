import React, { useState } from "react";
import logo from "../assets/puppyfy.png";
import "./login.css";
import VideoBack from "../videoBackground/videoBackground.jsx";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setError(data.message || "Invalid username or password");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  const handleSignUpClick = () => {
    document.querySelector(".container-home").classList.add("fade-out");
    setTimeout(() => navigate("/signup"), 300); // 300ms matches the CSS transition duration
  };
  const handleResetClick = () => {
    document.querySelector(".container-home").classList.add("fade-out");
    setTimeout(() => navigate("/Forget-Password"), 300); // 300ms matches the CSS transition duration
  };

  return (
    <>
      <div className="container-home">
        <div className="box-home">
          <div className="heading-home"></div>
          <img className="logo-home" src={logo} alt="Puppyfy logo" />
          <form className="login-form-home" onSubmit={handleLogin}>
            <div className="field1-home">
              <input
                className="username-home form-control"
                id="username-home"
                type="text"
                placeholder="Username or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="field2-home">
              <input
                className="password-home form-control"
                id="password-home"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button
              className="login-button-home"
              style={{ verticalAlign: "middle" }}
              title="login"
            >
              <span>Log In</span>
            </button>
            <div className="Others-home">
              <button className="fb-login-btn-home" type="button">
                <span className="_a04s _ab36-home"></span>
                <span><FaFacebook /> Log in with Facebook</span>
              </button>
              <span className="forgot-password-home" onClick={handleResetClick}>
                Forgot password?
              </span>
            </div>
          </form>
        </div>
        <div className="box-home">
          <p>
            Want to be a part of{" "}
            <strong className="puppyfy-home">PuppyFY</strong> ?{" "}
            <span className="signup-home" onClick={handleSignUpClick}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
      <VideoBack />
    </>
  );
}

export default Login;
