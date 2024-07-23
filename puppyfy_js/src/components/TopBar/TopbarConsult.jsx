import React from "react";
import { CiSearch } from "react-icons/ci";
import puppyfy from "../assets/puppyfy.png";
import "./Topbar.css";
import { FaUserDoctor } from "react-icons/fa6";
import { CgUserAdd } from "react-icons/cg";


function TopbarConsult({ onIconClick , onIconClickMobile}) {
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
          <input type="search" placeholder="Search for Vets ?"></input>
        </div>
        <div className="setting-icons">
          <span
            className="notification-top desktop-view"
            onClick={() => onIconClick("Wish")}
          >
            <h3 className="top-notification-icon">
            <CgUserAdd />
            </h3>
            
          </span>

          <span className="notification-top mobile-view"
            onClick={() => onIconClickMobile("Wish")}
          >
            <h2 className="top-notification-icon">
            <CgUserAdd />
            </h2>
            
          </span>
        

         
          <span className="notification-top desktop-view" onClick={() => onIconClick('Cart')}>
            <h3 className="top-notification-icon">
            <FaUserDoctor />
            </h3>
            <small className="notfy-counter">3+</small>
          </span>

          <span className="notification-top mobile-view" onClick={() => onIconClickMobile('Cart')}>
            <h2 className="top-notification-icon">
            <FaUserDoctor />
            </h2>
            <small className="notfy-counter">0+</small>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default TopbarConsult;
