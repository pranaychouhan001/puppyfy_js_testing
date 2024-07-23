import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import puppyfy from "../assets/puppyfy.png";
import "./Topbar.css";
import { FaRegGrinStars } from "react-icons/fa";
import { BsCartDash } from "react-icons/bs";


function TopbarEssentials({ onIconClick , onIconClickMobile}) {
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
          <input type="search" placeholder="What are you getting for your pet Today ?"></input>
        </div>
        <div className="setting-icons">
          <span
            className="notification-top desktop-view"
            onClick={() => onIconClick("Wish")}
          >
            <h3 className="top-notification-icon">
            <FaRegGrinStars />
            </h3>
            <small className="notfy-counter">7+</small>
          </span>

          <span className="notification-top mobile-view"
            onClick={() => onIconClickMobile("Wish")}
          >
            <h2 className="top-notification-icon">
            <FaRegGrinStars />
            </h2>
            <small className="notfy-counter">0+</small>
          </span>
        

         
          <span className="notification-top desktop-view" onClick={() => onIconClick('Cart')}>
            <h3 className="top-notification-icon">
            <BsCartDash />
            </h3>
            <small className="notfy-counter">3+</small>
          </span>

          <span className="notification-top mobile-view" onClick={() => onIconClickMobile('Cart')}>
            <h2 className="top-notification-icon">
            <BsCartDash />
            </h2>
            <small className="notfy-counter">0+</small>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default TopbarEssentials;
