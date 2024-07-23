import React from "react";
import profilePic from "../assets/puppy1.jpg";
import "./Notifications.css";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import Notimage1 from "../assets/puppy2.jpg";
import { IoMdArrowRoundBack } from "react-icons/io";

function Notifications({ onIconClick }) {
  return (
    <div className="notifications">
      <div className="heading">
        <h5
          className="back-to-feedback"
          onClick={() => onIconClick("feedbacks")}
        >
          <IoMdArrowRoundBack />
        </h5>
        <h5>Notifications</h5>
      </div>
      <div className="notification-content">
        <div className="notification-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="friend-requester-info">
              <p>
                <b>Storm</b> requested to join your community.{" "}
                <small className="text-gry"> 1 W</small>
              </p>
              <p className="text-gry">15 mutual friends</p>
            </div>
          </div>
          <div className="notification-action">
            <h4 className="check">
              <CiCircleCheck />
            </h4>
            <h4 className="remove">
              <CiCircleRemove />
            </h4>
          </div>
        </div>

        <div className="notification-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="friend-requester-info">
              <p>
                <b>Storm</b> requested to join your community.{" "}
                <small className="text-gry"> 1 W</small>
              </p>
              <p className="text-gry">15 mutual friends</p>
            </div>
          </div>
          <div className="notification-action">
            <h4 className="check">
              <CiCircleCheck />
            </h4>
            <h4 className="remove">
              <CiCircleRemove />
            </h4>
          </div>
        </div>
        <div className="notification-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="friend-requester-info">
              <p>
                <b>Storm</b> requested to join your community.{" "}
                <small className="text-gry"> 1 W</small>
              </p>
              <p className="text-gry">15 mutual friends</p>
            </div>
          </div>
          <div className="notification-action">
            <h4 className="check">
              <CiCircleCheck />
            </h4>
            <h4 className="remove">
              <CiCircleRemove />
            </h4>
          </div>
        </div>
        <div className="notification-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="friend-requester-info">
              <p>
                <b>Storm</b> requested to join your community.{" "}
                <small className="text-gry"> 1 W</small>
              </p>
              <p className="text-gry">15 mutual friends</p>
            </div>
          </div>
          <div className="notification-action">
            <h4 className="check">
              <CiCircleCheck />
            </h4>
            <h4 className="remove">
              <CiCircleRemove />
            </h4>
          </div>
        </div>
        <div className="notification-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="friend-requester-info">
              <p>
                <b>Storm</b> requested to join your community.{" "}
                <small className="text-gry"> 1 W</small>
              </p>
              <p className="text-gry">15 mutual friends</p>
            </div>
          </div>
          <div className="notification-action">
            <h4 className="check">
              <CiCircleCheck />
            </h4>
            <h4 className="remove">
              <CiCircleRemove />
            </h4>
          </div>
        </div>
        <div className="notification-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="friend-requester-info">
              <p>
                <b>Storm</b> requested to join your community.{" "}
                <small className="text-gry"> 1 W</small>
              </p>
              <p className="text-gry">15 mutual friends</p>
            </div>
          </div>
          <div className="notification-action">
            <h4 className="check">
              <CiCircleCheck />
            </h4>
            <h4 className="remove">
              <CiCircleRemove />
            </h4>
          </div>
        </div>
        <div className="notification-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="friend-requester-info">
              <p>
                <b>Storm</b> requested to join your community.{" "}
                <small className="text-gry"> 1 W</small>
              </p>
              <p className="text-gry">15 mutual friends</p>
            </div>
          </div>
          <div className="notification-action">
            <h4 className="check">
              <CiCircleCheck />
            </h4>
            <h4 className="remove">
              <CiCircleRemove />
            </h4>
          </div>
        </div>

        <div className="notification-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="friend-requester-info">
              <p>
                <b>Storm</b> requested to follow you.
                <small className="text-gry"> 1 Week</small>
              </p>
              <p className="text-gry">15 mutual friends</p>
            </div>
          </div>
          <div className="notification-action">
            <h4 className="check">
              <CiCircleCheck />
            </h4>
            <h4 className="remove">
              <CiCircleRemove />
            </h4>
          </div>
        </div>

        <div className="notification-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="friend-requester-info">
              <p>
                <b>Storm</b> requested to follow you.
                <small className="text-gry"> 1 Week</small>
              </p>
              <p className="text-gry">15 mutual friends</p>
            </div>
          </div>
          <div className="notification-action">
            <h4 className="check">
              <CiCircleCheck />
            </h4>
            <h4 className="remove">
              <CiCircleRemove />
            </h4>
          </div>
        </div>

        {/* notification for like or comment start */}
        <div className="notification-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="friend-requester-info">
              <p>
                <b>Pranay Chouhan</b> and 272 others liked your picture.{" "}
                <small className="text-gry"> just now</small>
              </p>
            </div>
          </div>
          <div className="notification-action">
            <img src={Notimage1} alt="" />
          </div>
        </div>

        {/* notifiction for comment or like end */}
        <div className="notification-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="friend-requester-info">
              <p>
                A dog requires a help. He is tied to a tree for more than two days and i think maybe his owner abondoned him. Please anyone save him.
                <small className="text-gry"> just now</small>
              </p>
            </div>
          </div>
          <div className="notification-action">
            <img src={Notimage1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
