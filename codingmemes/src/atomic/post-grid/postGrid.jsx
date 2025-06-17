import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './postGrid.css';

const PostGrid = ({ posts }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <>
            <div className="posts-grid">
                {posts.map((post, i) => (
                    <motion.div 
                        key={i} 
                        className="post-item"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        onClick={() => setSelectedPost(post)}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="post-overlay">
                            <span>Click to view</span>
                        </div>
                        <img src={post.image} alt="post" />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedPost && (
                    <motion.div 
                        className="post-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPost(null)}
                    >
                        <motion.div 
                            className="post-modal"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.5 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <img src={selectedPost.image} alt="post" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default PostGrid;
