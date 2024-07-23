import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { VscComment } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci"; 
import { FaHeart } from "react-icons/fa";

function ReelFeed() {
    const [allFeeds, setAllFeeds] = useState([]);

    useEffect(() => {
        async function fetchFeeds() {
            try {
                const response = await axios.get('http://localhost:3001/feeds_home_db');
                const feedsWithLikes = response.data.map(feed => ({
                    ...feed,
                    like_count: feed.likes_count // Set initial like_count
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
            // Update like in the database
            await axios.post('http://localhost:3001/feeds_like', { post_id: postId, author: 'test112233' });

            // Update state to reflect the new like count
            setAllFeeds(prevFeeds =>
                prevFeeds.map(feed =>
                    feed.post_id === postId
                        ? { ...feed, like_count: feed.likes_count + 1, likedByUser: true } // Update like count and likedByUser state
                        : feed
                )
            ); 
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    const handleDelete = async (postId) => {
        try {
            // Delete post in the database
            await axios.delete(`http://localhost:3001/feeds/${postId}`);

            // Update state to remove the deleted post
            setAllFeeds(prevFeeds =>
                prevFeeds.filter(feed => feed.post_id !== postId)
            );

            // Show delete success message
            alert('Post deleted successfully');
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div className="feeds">
            <div>
                
                    <div className="feed" >
                        {/* Feed top */}
                        <div className="feed-top">
                            <div className="user">
                                <div className="profile-picture">
                                    <img src="" alt="" />
                                </div>
                                <div className="info">
                                    <h3>Pranay Chouhan</h3>
                                    <div className="time text-gry">
                                        <small><span>2 minutes ago</span></small>
                                    </div>
                                </div>
                            </div>
                            
                                <span className="edit">
                                    <h5><MdDelete /></h5>
                                </span>
                            
                        </div>
                        {/* Feed Image */}
                        <div className="feed-img">
                            <img src="" alt="" />
                        </div>
                        {/* Feed Action Area */}
                        <div className="action-button">
                            <div className="interaction-button">
                                <span
                                >
                                    <i><FaHeart /></i>
                                    <p>20</p>
                                </span>
                                <span className='comment-button'><i><VscComment /></i><p>8</p></span>
                            </div>
                            <div className="bookmark">
                                <i><CiBookmark /></i>
                            </div>
                        </div>
                        {/* Caption */}
                        <div className="caption">
                            <p><b>Pranay</b> Hello Hiii</p>
                        </div>
                        {/* Comments */}
                        <div className='comments text-gry'>
                            View all <b>Woof Notes</b>
                        </div>
                    </div>
            
            </div>
        </div>
    );
}

export default ReelFeed;
