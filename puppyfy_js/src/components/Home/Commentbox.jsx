import React, { useState } from 'react';
import { BsFillSendFill } from "react-icons/bs";
import "./Home.css";

function Commentbox({ comments = [], postId, onAddComment }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    if (newComment.trim()) {
      onAddComment(postId, newComment);
      setNewComment('');
    } else {
      console.error('text is empty.');
    }
  };

  return (
    <div className="comment-box">
      <div className="message-content">
        {comments.map((comment) => (
          <div className="messages-photo" key={comment.comment_id}>
            <img src={comment.profilepic_url} alt="Profile" />
            <div className="what-comment">
              <div className="title">
                <h6><b>{comment.fullname}</b></h6>
                <p className='text-gry'>{comment.time_since_posted}</p>
              </div>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="comment-input">
        <input
          className="form-control"
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <h5 className="comment-insert-icon" onClick={handleSubmit}>
          <BsFillSendFill />
        </h5>
      </div>
    </div>
  );
}

export default Commentbox;
