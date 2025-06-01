import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import './post.css';

const Post = ({ post }) => {
    return (
        <div className="post">
            <div className="post-header">
                <div className="user-info">
                    <img src={post.profilePic || 'default-avatar.png'} alt="profile" className="profile-pic" />
                    <a href={`/user/${post.userId}`} className="username">{post.username}</a>
                </div>
            </div>

            <p className="post-description">{post.description}</p>

            <div className="post-image-container">
                <img src={post.image} alt="post content" className="post-image" />
            </div>

            <div className="post-actions">
                <button className="action-button">
                    <Heart className="action-icon" />
                    <span>{post.likes || 0}</span>
                </button>
                <button className="action-button">
                    <MessageCircle className="action-icon" />
                    <span>{post.comments?.length || 0}</span>
                </button>
                <button className="action-button">
                    <Share2 className="action-icon" />
                </button>
            </div>
        </div>
    );
};

export default Post;
