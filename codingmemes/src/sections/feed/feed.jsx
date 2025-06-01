import React from 'react';
import './feed.css';
import Post from '../../atomic/post/post';

const Feed = () => {
  const dummyPosts = Array(5).fill({
    id: 1,
    userId: '123',
    username: 'JohnDoe',
    profilePic: 'https://picsum.photos/50',
    description: 'This is an awesome post!',
    image: 'https://picsum.photos/800/600',
    likes: 42,
    comments: ['Great post!', 'Amazing!'],
    timestamp: new Date().toISOString()
  });

  return (
    <div className="feed-section">
      {dummyPosts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Feed;
