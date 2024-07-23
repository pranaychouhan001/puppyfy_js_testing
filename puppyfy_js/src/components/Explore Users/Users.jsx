import profilePic from "../assets/puppy1.jpg";
import Stories from "../Stories/Stories";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./Users.css";
import { FaRegHeart } from "react-icons/fa";
import React, { useState } from "react";
import UsersMiddleContent from "./UsersMiddleContent.jsx";
import Suggestions from "./Suggestions.jsx";
import TopbarSuggestions from "../TopBar/TopbarSuggestions.jsx";
import Navbar from "../navbar/Navbar/Navbar.jsx";
import Notifications from "../notifications/Notifications";
import PetFeedbacks from "../PetFeedbacks/PetFeedbacks";
import Messages from "../Messages/Messages.jsx";
import NotificationsMobile from "../NotificationsMobile/NotifficationsMobile.jsx";
import MessagesMobile from "../MessagesMobile/MessagesMobile.jsx";

import Navbar2 from "../navbar/Navbar/Navbar2.jsx";

// import Swiper styles

const Users = () => {
  //  function to toggle notifications and messages in right container
  const [currentView, setCurrentView] = useState("feedbacks"); // Default to showing feedbacks

  const handleIconClick = (view) => {
    setCurrentView(view);
  };

  //  function to toggle notifications and messages in main container
  const [currentViewMobile, setCurrentViewMobile] = useState("content"); // Default to showing feedbacks

  const handleIconClickMobile = (view) => {
    setCurrentViewMobile(view);
  };

  //to navigate to different pages
  const navigate = useNavigate();

  const handleEssentialsClick = () => {
    navigate("/Essentials");
  };
  const handleExploreClick = () => {
    navigate("/Explore");
  };
  const handleHomeClick = () => {
    navigate("/Home");
  };
  const handleCreateClick = () => {
    navigate("/Create");
  };
  const handleConsultClick = () => {
    navigate("/Consult");
  };
  const handleTrainClick = () => {
    navigate("/Train");
  };
  const handleSettingsClick = () => {
    navigate("/Settings");
  };
  const handleUsersClick = () => {
    navigate("/Users");
  };

  return (
    <>
      <div className="body">
        

      <TopbarSuggestions
            onIconClick={handleIconClick}
            onIconClickMobile={handleIconClickMobile}
          />

      
        <main>
        <Navbar 
          ExploreClick={handleExploreClick}
          HomeClick={handleHomeClick}
          CreateClick={handleCreateClick}
          EssentialsClick={handleEssentialsClick}
          ConsultClick={handleConsultClick}
          TrainClick={handleTrainClick}
          SettingsClick={handleSettingsClick}
          UsersClick={handleUsersClick}
          />

          <div className="containermain main-container">
            {/*main middle starts*/}

            <div className="main-middle">
             
             {currentViewMobile === "content" && (
                <UsersMiddleContent />
              )}
             {currentViewMobile === "feeds" && (
                <Suggestions onIconClick={handleIconClickMobile} />
              )}
            </div>

            <div className="main-right">
              
              {currentView === "feedbacks" && (
                <Suggestions />
              )}
              {currentView === "notifications" && (
                <Notifications onIconClick={handleIconClick} />
              )}
              {currentView === "messages" && (
                <Messages onIconClick={handleIconClick} />
              )}
             
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Users;