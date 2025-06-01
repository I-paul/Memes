import React from 'react';
import './home.css';
import Nav from '../../sections/navbar/navbar';
import Feed from '../../sections/feed/feed';
import UserProfile from '../../atomic/user-profile/userProfile';

const Home = () => {
    return (
        <div className="home-layout">
            <Nav />
            <Feed />
            <UserProfile />
        </div>
    );
};

export default Home;
