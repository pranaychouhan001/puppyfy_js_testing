import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { VscComment } from "react-icons/vsc";
import { FaBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Commentbox from "./Commentbox";

function Feeds() {
  const [allFeeds, setAllFeeds] = useState([]);
  const [activeCommentBox, setActiveCommentBox] = useState(null);
  const [comments, setComments] = useState({});

  useEffect(() => {
    async function fetchFeeds() {
      try {
        const response = await axios.get('http://localhost:3001/feeds_home_db');
        const feedsWithLikes = response.data.map(feed => ({
          ...feed,
          like_count: feed.likes_count
        }));
        setAllFeeds(feedsWithLikes);
      } catch (error) {
        console.error('Error fetching feeds:', error);
      }
    }

    fetchFeeds();
  }, []);

  const handleLike = async (postId) => {
    try {
      await axios.post('http://localhost:3001/feeds_like', { post_id: postId, author: 'test112233' });

      setAllFeeds(prevFeeds =>
        prevFeeds.map(feed =>
          feed.post_id === postId
            ? { ...feed, like_count: feed.like_count + 1, likedByUser: true }
            : feed
        )
      ); 
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:3001/feeds/${postId}`);

      setAllFeeds(prevFeeds =>
        prevFeeds.filter(feed => feed.post_id !== postId)
      );

      alert('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const toggleCommentBox = async (postId) => {
    if (activeCommentBox === postId) {
      setActiveCommentBox(null);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3001/comments/${postId}`);
      setComments(prevComments => ({ ...prevComments, [postId]: response.data }));
      setActiveCommentBox(postId);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const addComment = async (postId, commentText) => {
    if (!commentText.trim()) {
      console.error('Comment is empty.');
      return;
    }
  
    try {
      const author = 'test112233';
      console.log('Sending:', { post_id: postId, comment: commentText });
  
      await axios.post('http://localhost:3001/commentsAdd', { post_id: postId, comment: commentText, author});
  
      const response = await axios.get(`http://localhost:3001/comments/${postId}`);
      setComments(prevComments => ({ ...prevComments, [postId]: response.data }));
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className="feeds">
      {allFeeds.map((feed) => (
        <div className="feed" key={feed.post_id}>
          <div className="feed-top">
            <div className="user">
              <div className="profile-picture">
                <img src={feed.profilepic_url} alt="" />
              </div>
              <div className="info">
                <h3>{feed.fullname}</h3>
                <div className="time text-gry">
                  <small><span>{feed.time_since_posted}</span></small>
                </div>
              </div>
            </div>
            {feed.author === 'test112233' && (
              <span className="edit" onClick={() => handleDelete(feed.post_id)}>
                <h5><MdDelete /></h5>
              </span>
            )}
          </div>
          <div className="feed-img">
            <img src={feed.image_url} alt="" />
          </div>
          <div className="action-button">
            <div className="interaction-button">
              <span
                className='like-button'
                onClick={() => handleLike(feed.post_id)}
                style={{ color: feed.likedByUser ? 'red' : 'black' }}
              >
                <i><FaHeart /></i>
                <p>{feed.like_count}</p>
              </span>
              <span className='comment-button' onClick={() => toggleCommentBox(feed.post_id)}><i><VscComment /></i><p>{feed.comment_count}</p></span>
            </div>
            <div className="bookmark">
              <i><FaBookmark /></i>
            </div>
          </div>
          <div className="caption">
            <p><b>{feed.fullname}</b> {feed.description}.</p>
          </div>
          <div className='comments text-gry' onClick={() => toggleCommentBox(feed.post_id)}>
            View all <b>Woof Notes</b>
          </div>
          {activeCommentBox === feed.post_id && 
            <Commentbox 
              comments={comments[feed.post_id] || []} 
              postId={feed.post_id} 
              onAddComment={addComment} 
            />
          }
        </div>
      ))}
    </div>
  );
}

export default Feeds;
