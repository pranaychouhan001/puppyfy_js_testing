import React from "react";
import profilePic from "../assets/profile_pic.jpg";
import "./MessagesMobile.css";

import { IoMdArrowRoundBack } from "react-icons/io";



function MessagesMobile({onIconClick}) {
  return (
    <div className="messages">
      <div className="heading">
        <h4 onClick={()=>onIconClick("feeds")}><IoMdArrowRoundBack /></h4>
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
                <h6>Tushanshu Soni</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Shubham Chaurasiya</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
            <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Brajendra Pandey</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 min ago</p>
              
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
                <h6>Neelesh Jadhav</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Krishna Dumare</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Akash Agrawal</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Saanchi Patil</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Shreyansh Adlak</h6>
                <p>kya chal  raha hai? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">1 Week ago</p>
              
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
                <h6>Naveen Surjaye</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Dipanshu Kasade</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Storm</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Enzo</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Rhims Bhaladhare</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Raunak Gupta</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Tushanshu Soni</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">15 minutes ago</p>
              
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
                <h6>Tushanshu Soni</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">1 minutes ago</p>
              
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
                <h6>Tushanshu Soni</h6>
                <p>kya chal  raha hai bhai ? kaha hai or sab badhiya</p>
            </div>
                <p className="text-gry">18 hr ago</p>
              
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default MessagesMobile;
