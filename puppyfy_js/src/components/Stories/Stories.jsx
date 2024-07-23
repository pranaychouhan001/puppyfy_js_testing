import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Stories.css";
import profilePic from "../assets/puppy1.jpg";
import { IoAddCircleOutline } from "react-icons/io5";

function Stories({ onStoryClick, stories,onAddStoryClick}) {
 
  return (
    <>
      <div className="stories-container">
        <div className="content">
          <div className="stories" id="stories">
            <div className="story" onClick={onAddStoryClick} style={{ backgroundColor:'var(--color-gray)'}}>
            <h6 style={{ color:'white' ,paddingLeft:'1.5rem' ,display: 'flex', alignItems: 'center' , paddingTop:'1.5rem'}}>Your Story</h6>
              <div className="add-story" ><h2><IoAddCircleOutline /></h2>
              </div>
            </div>
            {stories.map((story, index) => (
              <div
                key={story.story_id}
                className="story"
                onClick={() => onStoryClick(index)}
              >
                <img src={story.profilepic_url} alt="" />
                <div className="author">{story.fullname}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Stories;
