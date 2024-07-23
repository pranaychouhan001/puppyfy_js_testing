import React, { useState } from 'react';
import './Navbar2.css';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiStethoscope } from "react-icons/ci";
import { GiJumpingDog } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";

function Navbar2({ ExploreClick, HomeClick, CreateClick, EssentialsClick, ConsultClick, TrainClick, SettingsClick }) {
  const [activeTab, setActiveTab] = useState('');

  const handleClick = (event, tabName, clickHandler) => {
    event.preventDefault();
    setActiveTab(tabName);
    clickHandler();
  };

  return (
    <div className='navbar-youtube-me-up'>
      <ul className="navbar-nav-me-up">
        <li className={`nav-item-me-up ${activeTab === 'home' ? 'active' : ''}`}>
          <a href="#" className='nav-link-me-up' onClick={(event) => handleClick(event, 'home', HomeClick)}>
            <h3><IoHomeOutline /></h3>
            <span className='link-text-me-up'>Home</span>
          </a>
        </li>
        <li className={`nav-item-me-up ${activeTab === 'explore' ? 'active' : ''}`}>
          <a href="#" className='nav-link-me-up' onClick={(event) => handleClick(event, 'explore', ExploreClick)}>
            <h3><MdOutlineExplore /></h3>
            <span className='link-text-me-up'>Explore</span>
          </a>
        </li>
        <li className={`nav-item-me-up ${activeTab === 'create' ? 'active' : ''}`}>
          <a href="#" className='nav-link-me-up' onClick={(event) => handleClick(event, 'create', CreateClick)}>
            <h3><IoCreateOutline /></h3>
            <span className='link-text-me-up'>Create</span>
          </a>
        </li>
        <li className={`nav-item-me-up ${activeTab === 'essentials' ? 'active' : ''}`}>
          <a href="#" className='nav-link-me-up' onClick={(event) => handleClick(event, 'essentials', EssentialsClick)}>
            <h3><CiShoppingCart /></h3>
            <span className='link-text-me-up'>Essentials</span>
          </a>
        </li>
        <li className={`nav-item-me-up ${activeTab === 'consult' ? 'active' : ''}`} id='not-forsmall'>
          <a href="#" className='nav-link-me-up' onClick={(event) => handleClick(event, 'consult', ConsultClick)}>
            <h3><CiStethoscope /></h3>
            <span className='link-text-me-up'>Consult</span>
          </a>
        </li>
        <li className={`nav-item-me-up ${activeTab === 'train' ? 'active' : ''}`} id='not-forsmall'>
          <a href="#" className='nav-link-me-up' onClick={(event) => handleClick(event, 'train', TrainClick)}>
            <h3><GiJumpingDog /></h3>
            <span className='link-text-me-up'>Train</span>
          </a>
        </li>
        <li className={`nav-item-me-up ${activeTab === 'settings' ? 'active' : ''}`} id='setting'>
          <a href="#" className='nav-link-me-up' onClick={(event) => handleClick(event, 'settings', SettingsClick)}>
            <h3><MdOutlineSettings /></h3>
            <span className='link-text-me-up'>Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar2;
