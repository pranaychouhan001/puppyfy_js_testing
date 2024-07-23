import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.css';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiStethoscope } from "react-icons/ci";
import { GiJumpingDog } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import { TfiSearch } from "react-icons/tfi";
import { FiMapPin } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
function Navbar({ ExploreClick, UsersClick, HomeClick, CreateClick,ReelsClick, EssentialsClick, ConsultClick, TrainClick, SettingsClick }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    // Update active tab based on current location
    switch (location.pathname) {
      case '/':
        setActiveTab('home');
        break;
      case '/Users':
        setActiveTab('users'); // Assuming '/Explore' corresponds to 'users' tab
        break;
      case '/Create':
        setActiveTab('create');
        break;
        case '/Reels':
        setActiveTab('reels');
        break;
      case '/Essentials':
        setActiveTab('essentials');
        break;
      case '/Consult':
        setActiveTab('consult');
        break;
      case '/Train':
        setActiveTab('train');
        break;
      case '/Settings':
        setActiveTab('settings');
        break;
      default:
        setActiveTab('');
        break;
    }
  }, [location.pathname]);

  const handleClick = (event, tabName, clickHandler) => {
    event.preventDefault();
    setActiveTab(tabName); // Update active tab immediately on click
    clickHandler();
  };

  return (
    <div className='navbar-youtube-me'>
      <ul className="navbar-nav-me">
        <li className={`nav-item-me ${activeTab === 'home' ? 'active' : ''}`}>
          <a href="#" className='nav-link-me' onClick={(event) => handleClick(event, 'home', HomeClick)}>
            <h3><IoHomeOutline /></h3>
            <span className='link-text-me'>Home</span>
          </a>
        </li>
        <li className={`nav-item-me ${activeTab === 'users' ? 'active' : ''}`} >
          <a href="#" className='nav-link-me' onClick={(event) => handleClick(event, 'users', UsersClick)}>
            <h3><TfiSearch /></h3>
            <span className='link-text-me'>Explore</span>
          </a>
        </li>
        <li className={`nav-item-me ${activeTab === 'create' ? 'active' : ''}`}>
          <a href="#" className='nav-link-me' onClick={(event) => handleClick(event, 'create', CreateClick)}>
            <h3><FiMapPin /></h3>
            <span className='link-text-me'>FyMap</span>
          </a>
        </li>
        <li className={`nav-item-me ${activeTab === 'reels' ? 'active' : ''}`}>
          <a href="#" className='nav-link-me' onClick={(event) => handleClick(event, 'Reels', ReelsClick)}>
            <h3><IoVideocamOutline /></h3>
            <span className='link-text-me'>Reels</span>
          </a>
        </li>
        <li className={`nav-item-me ${activeTab === 'essentials' ? 'active' : ''}`}>
          <a href="#" className='nav-link-me' onClick={(event) => handleClick(event, 'essentials', EssentialsClick)}>
            <h3><CiShoppingCart /></h3>
            <span className='link-text-me'>Essentials</span>
          </a>
        </li>
        <li className={`nav-item-me ${activeTab === 'consult' ? 'active' : ''}`} id='not-forsmall'>
          <a href="#" className='nav-link-me' onClick={(event) => handleClick(event, 'consult', ConsultClick)}>
            <h3><CiStethoscope /></h3>
            <span className='link-text-me'>Consult</span>
          </a>
        </li>
        <li className={`nav-item-me ${activeTab === 'train' ? 'active' : ''}`} id='not-forsmall'>
          <a href="#" className='nav-link-me' onClick={(event) => handleClick(event, 'train', TrainClick)}>
            <h3><GiJumpingDog /></h3>
            <span className='link-text-me'>Train</span>
          </a>
        </li>
        <li className={`nav-item-me ${activeTab === 'settings' ? 'active' : ''}`} id='setting'>
          <a href="#" className='nav-link-me' onClick={(event) => handleClick(event, 'settings', SettingsClick)}>
            <h3><MdOutlineSettings /></h3>
            <span className='link-text-me'>Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
