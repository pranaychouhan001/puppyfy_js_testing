import profilePic from "../assets/profile_pic.jpg";
import "./PetFeedbacks.css";
import { FaHeart } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

function PetFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [likedFeedbacks, setLikedFeedbacks] = useState(new Set());
  const [newFeedback, setNewFeedback] = useState("");

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/feedbacks_db");
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  const handleLike = async (feedback_id) => {
    const user_id = 1; // Replace with actual user ID from your authentication context

    try {
      await axios.post("http://localhost:3001/feedbacks_db/like", {
        feedback_id,
        user_id,
      });

      setLikedFeedbacks((prevLikedFeedbacks) => {
        const newLikedFeedbacks = new Set(prevLikedFeedbacks);
        newLikedFeedbacks.add(feedback_id);
        return newLikedFeedbacks;
      });

      setFeedbacks((prevFeedbacks) =>
        prevFeedbacks.map((feedback) =>
          feedback.feedback_id === feedback_id
            ? { ...feedback, like_count: feedback.like_count + 1 }
            : feedback
        )
      );
    } catch (error) {
      console.error("Error liking feedback:", error);
    }
  };

  const handleSendFeedback = async () => {
    const author = "test112233"; // Replace with actual author from your authentication context

    try {
      const response = await axios.post(
        "http://localhost:3001/feedbacks_db/feedback",
        { text: newFeedback, author }
      );
      if (response.status === 200) {
        setNewFeedback(""); // Clear the input
        fetchFeedbacks(); // Refresh feedbacks
      }
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  return (
    <div className="pet-feedbacks">
      <div className="heading">
        <h5>Pet Feedbacks around the world!</h5>
      </div>
      <div className="pet-feedbacks-content">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.feedback_id}
            className="pet-feedbacks-content-menu"
          >
            <div className="info">
              <div className="profile-picture">
                <img src={feedback.profilepic_url} alt="Profile" />
                
              </div>
              <div className="feedback-info">
                <p>{feedback.text}</p>
                <div className="feedback-action">
                  <p>
                    <FaHeart
                      className={`feedback-like-button ${
                        likedFeedbacks.has(feedback.feedback_id) ? "liked" : ""
                      }`}
                      onClick={() => handleLike(feedback.feedback_id)}
                    />
                  </p>

                  <p>{feedback.like_count}</p>
               
                  <p className="feedback-author text-gry">
                    -{feedback.fullname}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="feedback-input">
        <input
          className="form-control"
          placeholder="Write your feedback..."
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
        />
        <h5 className="feedback-insert-icon" onClick={handleSendFeedback}>
          <BsFillSendFill />
        </h5>
      </div>
    </div>
  );
}

export default PetFeedbacks;
