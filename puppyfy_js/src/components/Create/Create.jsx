import React, { useState, useEffect } from 'react';
import "./Create.css";
import Topbar from '../TopBar/Topbar';
import Navbar from '../navbar/Navbar/Navbar';
import { useNavigate } from "react-router-dom";
import MyMapComponent from "./Map";
import 'leaflet/dist/leaflet.css';
import Help from "./Help"

const Create = () => {
  const navigate = useNavigate();
  const [myposition, setPosition] = useState([25.505, -0.09]); // Default position

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error fetching geolocation: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

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
            <div className="main-middle">
              <MyMapComponent myposition={myposition} />
            </div>
            <div className="main-right">
              <Help />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Create;
