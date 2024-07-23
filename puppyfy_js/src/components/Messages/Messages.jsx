import React from "react";
import profilePic from "../assets/profile_pic.jpg";
import "./Messages.css";

import { IoMdArrowRoundBack } from "react-icons/io";

function Messages({onIconClick}) {
  return (
    <div className="messages">
      <div className="heading">
      <h5 className='back-to-feedback' onClick={()=>onIconClick("feedbacks")}><IoMdArrowRoundBack /></h5>
        <h5>Messages</h5>
      </div>
      <div className="messages-content">
        <div className="messages-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="messages-info">
            <div className="message-text">
                <h6><b>Tushanshu Soni</b></h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="msg-time text-gry">last week</p>
              
            </div>
          </div>
        </div>

        <div className="messages-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="messages-info">
            <div className="message-text">
                <h6><b>Tushanshu Soni</b></h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="msg-time text-gry">last week</p>
              
            </div>
          </div>
        </div>
        <div className="messages-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="messages-info">
            <div className="message-text">
                <h6><b>Tushanshu Soni</b></h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="msg-time text-gry">last week</p>
              
            </div>
          </div>
        </div>
        <div className="messages-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="messages-info">
            <div className="message-text">
                <h6><b>Tushanshu Soni</b></h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="msg-time text-gry">last week</p>
              
            </div>
          </div>
        </div>
        <div className="messages-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="messages-info">
            <div className="message-text">
                <h6><b>Tushanshu Soni</b></h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="msg-time text-gry">last week</p>
              
            </div>
          </div>
        </div>
        <div className="messages-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="messages-info">
            <div className="message-text">
                <h6><b>Tushanshu Soni</b></h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="msg-time text-gry">last week</p>
              
            </div>
          </div>
        </div>
        <div className="messages-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="messages-info">
            <div className="message-text">
                <h6><b>Tushanshu Soni</b></h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="msg-time text-gry">last week</p>
              
            </div>
          </div>
        </div>
        <div className="messages-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="messages-info">
            <div className="message-text">
                <h6><b>Tushanshu Soni</b></h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="msg-time text-gry">last week</p>
              
            </div>
          </div>
        </div>
        <div className="messages-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="messages-info">
            <div className="message-text">
                <h6><b>Tushanshu Soni</b></h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="msg-time text-gry">last week</p>
              
            </div>
          </div>
        </div>
        <div className="messages-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="messages-info">
            <div className="message-text">
                <h6><b>Tushanshu Soni</b></h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="msg-time text-gry">last week</p>
              
            </div>
          </div>
        </div>
        <div className="messages-content-menu">
          <div className="info">
            <div className="profile-picture">
              <img src={profilePic} alt="" />
            </div>
            <div className="messages-info">
            <div className="message-text">
                <h6><b>Tushanshu Soni</b></h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="msg-time text-gry">last week</p>
              
            </div>
          </div>
        </div>


        


      </div>
    </div>
  );
}

export default Messages;
