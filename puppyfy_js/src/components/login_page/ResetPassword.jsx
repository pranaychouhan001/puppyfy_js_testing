import React, { useState } from "react";
import logo from "../assets/puppyfy.png";
import "./login.css";
import { useNavigate } from "react-router-dom";
import VideoBack from "../videoBackground/videoBackground.jsx";

function ResetPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    tempPassword: "",
    newPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(true);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResetClick = async () => {
    try {
      const response = await fetch("http://localhost:3001/sendTempPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const result = await response.json();

      if (result.success) {
        setShowPassword(true);
        setShowResetPassword(false);
        setMessage("Temporary password sent to your email.");
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/updatePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Password updated successfully.");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  const handleSignUpClick = () => {
    document.querySelector(".container-home").classList.add("fade-out");
    setTimeout(() => navigate("/signup"), 300);
  };

  return (
    <>
      <div className="container-home">
        <div className="box-home">
          <div className="heading-home"></div>
          <img className="logo-home" src={logo} alt="Puppyfy logo" />
          <form className="login-form-home" onSubmit={handleChangePassword}>
            <div className="field1-home">
              <input
                className="email-home form-control"
                id="email"
                type="text"
                required
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            {showResetPassword && (
              <button
                className="login-button-home"
                type="button"
                style={{ verticalAlign: "middle" }}
                title="login"
                onClick={handleResetClick}
              >
                <span>Reset Password</span>
              </button>
            )}
            {showPassword && (
              <>
                <div className="field2-home">
                  <input
                    className="password-home form-control"
                    id="tempPassword"
                    type="password"
                    placeholder="Password on Mail"
                    required
                    name="tempPassword"
                    value={formData.tempPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="field2-home">
                  <input
                    className="password-home form-control"
                    id="newPassword"
                    type="password"
                    placeholder="New Password"
                    required
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className="login-button-home"
                  type="submit"
                  style={{ verticalAlign: "middle" }}
                  title="login"
                >
                  <span>Change Password</span>
                </button>
              </>
            )}
            {message && <p className="message">{message}</p>}
          </form>
        </div>
        <div className="box-home">
          <p>
            Want to be a part of <strong className="puppyfy-home">PuppyFY</strong>?{" "}
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

export default ResetPassword;
