import React from "react";
import "./Stories.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

function StoriesFullView({ story, onClose, onPrevious, onNext }) {
  return (
    <div className="story-full-view active-story">
      <div className="close-button-storyfull" onClick={onClose}>
        
        <h2><AiOutlineCloseCircle /></h2>
      </div>
      <div className="content-storyfull">
        <div className="previous-button-storyfull" onClick={onPrevious}>
          <h2><CiCircleChevLeft /></h2>
        </div>
        <div className="story-storyfull">
          <img src={story.image_url} alt="" onClick={onClose}/>
          <div className="author-storyfull">{story.fullname} </div>
        </div>
        <div className="next-button-storyfull" onClick={onNext}>
          <h2><CiCircleChevRight /></h2>
        </div>
      </div>
    </div>
  );
}

export default StoriesFullView;
