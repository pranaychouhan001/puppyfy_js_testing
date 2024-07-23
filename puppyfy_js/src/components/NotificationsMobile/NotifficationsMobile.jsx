import React from 'react';
import profilePic from '../assets/puppy1.jpg';
import './NotificationsMobile.css';
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import Notimage1 from '../assets/puppy2.jpg' 
import { IoMdArrowRoundBack } from "react-icons/io";

function NotificationsMobile({onIconClick}) {
  return (
    
    <div className="notifications">
    <div className="heading">
        <h4 onClick={()=>onIconClick("feeds")}><IoMdArrowRoundBack /></h4>
      <h5>Notifications</h5>
    </div>
    <div className="notification-content">
    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to join your community. <small className="text-gry"> 1 W</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn btn-primary">
            Confirm
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>


    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to join your community. <small className="text-gry"> 1 W</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn">
            <h4 className='check'><CiCircleCheck /></h4>
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>
    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to join your community. <small className="text-gry"> 1 W</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn">
            <h4 className='check'><CiCircleCheck /></h4>
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>
    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to join your community. <small className="text-gry"> 1 W</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn">
            <h4 className='check'><CiCircleCheck /></h4>
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>
    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to join your community. <small className="text-gry"> 1 W</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn">
            <h4 className='check'><CiCircleCheck /></h4>
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>
    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to join your community. <small className="text-gry"> 1 W</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn">
            <h4 className='check'><CiCircleCheck /></h4>
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>
    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to join your community. <small className="text-gry"> 1 W</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn">
            <h4 className='check'><CiCircleCheck /></h4>
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>

    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to follow you.<small className="text-gry"> 1 Week</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn">
            <h4 className='check'><CiCircleCheck /></h4>
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>

    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to follow you.<small className="text-gry"> 1 Week</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn">
            <h4 className='check'><CiCircleCheck /></h4>
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>


            {/* notification for like or comment start */}
    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Pranay Chouhan</b> and 272 others liked your picture. <small className="text-gry"> just now</small></p>
        
          
          
        </div>
    </div>
    <div className="notification-action">
            <img src={Notimage1} alt="" />
    </div>
    </div>

            {/* notifiction for comment or like end */}
            <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Pranay Chouhan</b> commented on your post. <small className="text-gry"> just now</small></p>
        
          
          
        </div>
    </div>
    <div className="notification-action">
            <img src={Notimage1} alt="" />
    </div>
    </div>


    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to join your community. <small className="text-gry"> 1 W</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn btn-primary">
            Confirm
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>


    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to join your community. <small className="text-gry"> 1 W</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn btn-primary">
            Confirm
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>


    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to join your community. <small className="text-gry"> 1 W</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn btn-primary">
            Confirm
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>


    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to join your community. <small className="text-gry"> 1 W</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn btn-primary">
            Confirm
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>


    <div className="notification-content-menu">
    <div className="info">
        <div className="profile-picture">
          <img src={profilePic} alt="" />
        </div>
        <div className='friend-requester-info'>
          <p><b>Storm</b> requested to join your community. <small className="text-gry"> 1 W</small></p>
          <p className="text-gry">
            15 mutual friends
          </p>
          
          
        </div>
    </div>
    <div className="notification-action">
            <button className="btn btn-primary">
            Confirm
            </button>
            <button className="btn">
            <h4 className='remove'><CiCircleRemove /></h4>
            </button>
    </div>
    </div>

    </div>
  </div>
  
  )
}

export default NotificationsMobile