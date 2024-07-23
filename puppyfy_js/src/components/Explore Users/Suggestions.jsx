import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Suggestions.css";
import { MdCancel } from "react-icons/md";

function Suggestions() {
  const [suggestion, setsuggestion] = useState([]);

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const fetchSuggestions = async () => {
    try {
      const response = await axios.get("http://localhost:3001/suggestions");
      setsuggestion(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleRequest = async (friendName) => {
    try {
      const response = await axios.post("http://localhost:3001/addFriend", {
        username: "test112233",  // Your username
        friend_name: friendName,
        friend: 1
      });

      if (response.status === 200) {
        alert("Friend request sent!");
      }
      fetchSuggestions();
    } catch (error) {
      console.error("Error sending friend request:", error);
      alert("Failed to send friend request.");
    }
  };

  return (
    <div className="suggestions">
      <div className="heading">
        <h5>Suggestions for you</h5>
      </div>
      <div className="notification-content">
        {suggestion.map((sugges) => (
          <div className="notification-content-menu" key={sugges.username}>
            <div className="info">
              <div className="profile-picture">
                <img src={sugges.profilepic_url} alt="" />
              </div>
              <div className="friend-requester-info">
                <p>{sugges.fullname}</p>
              </div>
            </div>
            <div className="notification-action">
              <p>
                <button
                  type="button"
                  className="btn-request btn btn-info"
                  onClick={() => handleRequest(sugges.username)}
                >
                  Request
                </button>
              </p>
              <h5><MdCancel /></h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
