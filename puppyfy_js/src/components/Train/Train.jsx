import React , { useState } from 'react'
import "./Train.css"
import Topbar from '../TopBar/Topbar';
import Navbar from '../navbar/Navbar/Navbar';
import {useNavigate } from "react-router-dom";
import AllTrainers from './AllTrainers.jsx'




const Train = () => {
  //to navigate to different pages
  const navigate = useNavigate();

  const handleEssentialsClick = () => {
    navigate('/Essentials');
  };
  const handleExploreClick = () => {
    navigate('/Explore');
  };
  const handleHomeClick = () => {
    navigate('/Home');
  };
  const handleCreateClick = () => {
    navigate('/Create');
  };
  const handleConsultClick = () => {
    navigate('/Consult');
  };
  const handleTrainClick = () => {
    navigate('/Train');
  };
  const handleSettingsClick = () => {
    navigate('/Settings');
  };

  
  return (
    <>
      <div className="body">
        

        <Topbar />

      
        <main>
        <Navbar 
          ExploreClick={handleExploreClick}
          HomeClick={handleHomeClick}
          CreateClick={handleCreateClick}
          EssentialsClick={handleEssentialsClick}
          ConsultClick={handleConsultClick}
          TrainClick={handleTrainClick}
          SettingsClick={handleSettingsClick}
          />

          <div className="containermain main-container">
            {/*main middle starts*/}

            <div className="main-middle">
             
            </div>

            <div className="main-right">
             
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Train;
