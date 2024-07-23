import React , { useState } from 'react'
import "./Essentials.css";
import TopbarEssentials from "../TopBar/TopbarEssentials.jsx";
import Navbar from '../navbar/Navbar/Navbar';
import CartItems from './CartItems';
import {useNavigate } from "react-router-dom";
import Wishlist from './Wishlist.jsx';
import Products from "./Products.jsx"







const Essentials = () => {

    //  function to toggle notifications and messages in right container
    const [currentView, setCurrentView] = useState("Wish"); 

    const handleIconClick = (view) => {
      setCurrentView(view);
    };

      //  function to toggle notifications and messages in main container
  const [currentViewMobile, setCurrentViewMobile] = useState(""); 

  const handleIconClickMobile = (view) => {
    setCurrentViewMobile(view);
  };


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
        

        <TopbarEssentials 
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
          />

          <div className="containermain main-container">
            {/*main middle starts*/}

            <div className="main-middle">
            {currentViewMobile === "Cart" && <CartItems />}
            {currentViewMobile === "Wish" && <Wishlist />}
            <Products />

           

            </div>

            <div className="main-right">
            {currentView === "Cart" && <CartItems />}
            {currentView === "Wish" && <Wishlist />}
        
            
             
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Essentials;
