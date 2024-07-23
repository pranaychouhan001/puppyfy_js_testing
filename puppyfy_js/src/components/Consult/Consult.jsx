import React , { useState } from 'react'
import "./Consult.css"
import TopbarConsult from '../TopBar/TopbarConsult.jsx';
import Navbar from '../navbar/Navbar/Navbar';
import {useNavigate } from "react-router-dom";
import Allvets from './Allvets.jsx';




const Consult = () => {

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
        

        <TopbarConsult />

      
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

            <Allvets />
            
            </div>
            

            <div className="main-right">
            
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Consult;
