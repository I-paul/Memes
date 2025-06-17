import React from 'react';
import { Camera, MapPin, Link as LinkIcon, Edit2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './profileHeader.css';

const ProfileHeader = ({ user }) => {
    return (
        <>
            <div className="profile-cover">
                <div className="cover-overlay"></div>
                <img src={user.coverPic} alt="cover" />
                <button className="edit-cover"><Camera /></button>
            </div>

            <motion.div 
                className="profile-info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="profile-header">
                    <div className="profile-pic-container">
                        <img src={user.profilePic} alt="profile" />
                        <button className="edit-profile-pic"><Camera /></button>
                    </div>
                    <div className="profile-details">
                        <div className="profile-name-section">
                            <h1>{user.username}</h1>
                            <button className="edit-profile-btn">
                                <Edit2 size={18} />
                                Edit Profile
                            </button>
                        </div>
                        <div className="profile-stats">
                            {Object.entries(user.stats).map(([key, value]) => (
                                <div key={key} className="stat-item">
                                    <span className="stat-value">{value}</span>
                                    <span className="stat-label">{key}</span>
                                </div>
                            ))}
                        </div>
                        <div className="profile-meta">
                            <p className="bio">{user.bio}</p>
                            <div className="meta-items">
                                <span><MapPin size={16} /> {user.location}</span>
                                <span><LinkIcon size={16} /> {user.website}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ProfileHeader;
