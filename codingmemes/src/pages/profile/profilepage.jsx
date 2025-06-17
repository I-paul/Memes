import React from 'react';
import './profilepage.css';
import Nav from '../../sections/navbar/navbar';
import ProfileHeader from '../../atomic/profile-header/profileHeader';
import PostGrid from '../../atomic/post-grid/postGrid';

const ProfilePage = () => {
  const user = {
    username: "JohnDoe",
    profilePic: "https://picsum.photos/200",
    coverPic: "https://picsum.photos/1920/400",
    bio: "Professional photographer | Nature lover | Coffee addict",
    location: "New York, USA",
    website: "johndoe.com",
    stats: {
      posts: 42,
      followers: 1234,
      following: 321
    }
  };

  const posts = Array(6).fill(null).map((_, i) => ({
    id: i,
    image: `https://picsum.photos/400/400?random=${i}`
  }));

  return (
    <div className="profile-page-layout">
      <Nav />
      <div className="profile-content">
        <ProfileHeader user={user} />
        <div className="profile-posts">
          <h2>Posts</h2>
          <PostGrid posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;