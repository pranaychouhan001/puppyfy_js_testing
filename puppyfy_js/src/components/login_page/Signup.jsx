import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import VideoBack from "../videoBackground/videoBackground.jsx";
import "./login.css";
import logo from "../assets/puppyfy.png";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    fullName: "",
    username: "",
    password: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignupClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setErrorMessage("");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setIsSuccess(false);
        setErrorMessage(result.message || "User registration failed");
      }
    } catch (error) {
      setIsSuccess(false);
      setErrorMessage("Error: " + error.message);
    }
  };

  return (
    <>
      <div className="container-home">
        <div className="box-home">
          <img className="logo-home" src={logo} alt="Puppyfy logo" />
          <form className="login-form-home" onSubmit={handleSignupClick}>
            <div className="field1-home">
              <input
                className="email-home form-control"
                type="text"
                required
                placeholder="Email"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="field2-home">
              <input
                className="fullname-home form-control"
                type="text"
                required
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="field2-home">
              <input
                className="username-home form-control"
                type="text"
                required
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="field2-home">
              <input
                className="password-home form-control"
                type="password"
                required
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button className="login-button-home" type="submit">
              <span>Sign Up</span>
            </button>
            {isSuccess && <p className="success-message">User registered successfully</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="other1">
              <button className="fb-login-btn-home" type="button">
                <span><FaFacebook /> Log in with Facebook</span>
              </button>
              <span className="forgot-password-home" onClick={() => navigate("/Forget-Password")}>
                Forgot password?
              </span>
            </div>
          </form>
        </div>
        <div className="box-home">
          <p>
            Already a part of <strong className="puppyfy-home">PuppyFY</strong>?{" "}
            <span className="backlogin-home" onClick={() => navigate("/")}>
              Log In
            </span>
          </p>
        </div>
      </div>
      <VideoBack />
    </>
  );
}

export default Signup;
