import React from 'react';
import './userProfile.css';

const UserProfile = () => {
    const user = {
        username: "JohnDoe",
        profilePic: "https://picsum.photos/100",
        posts: 42,
        followers: 1234,
        following: 321,
        bio: "Just a cool person sharing cool stuff!",
        favorites: [
            { id: 1, username: "Jane", pic: "https://picsum.photos/50" },
            { id: 2, username: "Mike", pic: "https://picsum.photos/51" },
        ]
    };

    return (
        <div className="user-profile-section">
            <div className="profile-header">
                <img src={user.profilePic} alt="profile" className="main-profile-pic" />
                <h2>{user.username}</h2>
            </div>
            
            <div className="stats">
                <div className="stat-item">
                    <span className="stat-number">{user.posts}</span>
                    <span className="stat-label">Posts</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{user.followers}</span>
                    <span className="stat-label">Followers</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{user.following}</span>
                    <span className="stat-label">Following</span>
                </div>
            </div>

            <div className="bio">{user.bio}</div>

            <div className="favorites">
                <h3>Favorites</h3>
                <div className="favorites-list">
                    {user.favorites.map(fav => (
                        <div key={fav.id} className="favorite-item">
                            <img src={fav.pic} alt={fav.username} />
                            <span>{fav.username}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
