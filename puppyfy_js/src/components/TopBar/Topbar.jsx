import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import puppyfy from "../assets/puppyfy.png";
import "./Topbar.css";

function Topbar({ onIconClick , onIconClickMobile}) {
  return (
    <nav className="topbar">
      <div className="container nav-container">
        <div className="logo">
          <img src={puppyfy} alt="" />
        </div>
        <div className="search-bar">
          <h4 className="fa fa-search icon-search">
            <CiSearch />
          </h4>
          <input type="search" placeholder="Search for your friends"></input>
        </div>
        <div className="setting-icons">
          <span
            className="notification-top desktop-view"
            onClick={() => onIconClick("notifications")}
          >
            <h2 className="top-notification-icon">
              <IoIosNotificationsOutline />
            </h2>
            <small className="notfy-counter">7+</small>
          </span>

          <span
            className="notification-top mobile-view"
            onClick={() => onIconClickMobile("notification")}
          >
            <h2 className="top-notification-icon">
              <IoIosNotificationsOutline />
            </h2>
            <small className="notfy-counter">0+</small>
          </span>
        

         
          <span className="notification-top desktop-view" onClick={() => onIconClick('messages')}>
            <h2 className="top-notification-icon">
              <TiMessages />
            </h2>
            <small className="notfy-counter">3+</small>
          </span>

          <span className="notification-top mobile-view" onClick={() => onIconClickMobile('messages')}>
            <h2 className="top-notification-icon">
              <TiMessages />
            </h2>
            <small className="notfy-counter">0+</small>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
