import './navbar.css';
import Links from '../../atomic/nav-links/links';
import Logo from '../../atomic/logo/logo';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
    const [isIcons, setIsIcons] = useState(window.innerWidth < 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsIcons(window.innerWidth < 1000);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.nav className={isIcons ? 'nav-icons' : 'nav-full'}
            initial={{ opacity: 0.5, x: -470 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
        >
            <Logo icons={isIcons} />
            <Links icons={isIcons} />
        </motion.nav>
    );
}

export default Nav;
