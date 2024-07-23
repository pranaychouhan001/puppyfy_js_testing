import profilePic from "../assets/puppy1.jpg";
import Stories from "../Stories/Stories";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./Home.css";
import { FaRegHeart } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Feeds from "./Feeds";
import TopbarHome from "../TopBar/TopbarHome.jsx";
import Navbar from "../navbar/Navbar/Navbar.jsx";
import Notifications from "../notifications/Notifications";
import PetFeedbacks from "../PetFeedbacks/PetFeedbacks";
import Messages from "../Messages/Messages.jsx";
import NotificationsMobile from "../NotificationsMobile/NotifficationsMobile.jsx";
import MessagesMobile from "../MessagesMobile/MessagesMobile.jsx";
import StoriesFullView from "../Stories/StoriesFullView.jsx";
import Navbar2 from "../navbar/Navbar/Navbar2.jsx";
import axios from "axios";
import AddingStories from "../Stories/AddingStories.jsx";
import CreatePost from "../Stories/CreatePost.jsx"

const Home = () => {
  const [currentView, setCurrentView] = useState("feedbacks"); // Default to showing feedbacks
  const [currentViewMobile, setCurrentViewMobile] = useState("feeds"); // Default to showing feedbacks
  const [allStories, setAllStories] = useState([]);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);
  const [showAddingStories, setShowAddingStories] = useState(false); // State for showing AddingStories
  const [showCreatePost, setShowCreatePost] = useState(false); // State for showing CreatePost

  const handleAddStoryClick = () => {
    setShowAddingStories(true); // Show AddingStories component
  };
  const handleRemoveStoryClick = () => {
    setShowAddingStories(false); // Remove AddingStories component
  };

  const handleCreatePostClick = () => {
    setShowCreatePost(true); // Remove AddingStories component
  };
  const handleRemovePostClick = () => {
    setShowCreatePost(false); // Remove AddingStories component
  };


  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStories() {
      try {
        const response = await axios.get("http://localhost:3001/stories_db");
        setAllStories(response.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    }

    fetchStories();
  }, []);

  const handleIconClick = (view) => {
    setCurrentView(view);
  };

  const handleIconClickMobile = (view) => {
    setCurrentViewMobile(view);
  };

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
  const handleReelsClick = () => {
    navigate("/Reels");
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

  const showFullView = (index) => {
    setSelectedStoryIndex(index);
  };

  const hideFullView = () => {
    setSelectedStoryIndex(null);
  };

  const showPreviousStory = () => {
    if (selectedStoryIndex > 0) {
      setSelectedStoryIndex(selectedStoryIndex - 1);
    }
  };

  const showNextStory = () => {
    if (selectedStoryIndex < allStories.length - 1) {
      setSelectedStoryIndex(selectedStoryIndex + 1);
    }
  };

  return (
    <>
      <div className="body">
      { showCreatePost && <CreatePost onRemovePostClick={handleRemovePostClick}/>}
        {showAddingStories && <AddingStories onRemoveStoryClick={handleRemoveStoryClick}/>}

        {selectedStoryIndex !== null && (
          <StoriesFullView
            story={allStories[selectedStoryIndex]}
            onClose={hideFullView}
            onPrevious={showPreviousStory}
            onNext={showNextStory}
          />
        )}

        {currentViewMobile === "feeds" && (
          <TopbarHome
            onIconClick={handleIconClick}
            onIconClickMobile={handleIconClickMobile}
            onCreatePostClick={handleCreatePostClick}
          />
        )}

        <main>
          <Navbar2 />
          <Navbar
            ExploreClick={handleExploreClick}
            HomeClick={handleHomeClick}
            CreateClick={handleCreateClick}
            EssentialsClick={handleEssentialsClick}
            ConsultClick={handleConsultClick}
            TrainClick={handleTrainClick}
            SettingsClick={handleSettingsClick}
            UsersClick={handleUsersClick}
            ReelsClick={handleReelsClick}
          />

          <div className="containermain main-container">
            <div className="main-middle">
              {currentViewMobile === "feeds" && (
                <Stories
                  onStoryClick={(index) => showFullView(index)}
                  onAddStoryClick={handleAddStoryClick}
                  stories={allStories}
                />
              )}
              {currentViewMobile === "feeds" && <Feeds />}
              {currentViewMobile === "messages" && (
                <MessagesMobile onIconClick={handleIconClickMobile} />
              )}
              {currentViewMobile === "notification" && (
                <NotificationsMobile onIconClick={handleIconClickMobile} />
              )}
            </div>

            <div className="main-right">
              {currentView === "notifications" && (
                <Notifications onIconClick={handleIconClick} />
              )}
              {currentView === "feedbacks" && <PetFeedbacks />}
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

export default Home;
