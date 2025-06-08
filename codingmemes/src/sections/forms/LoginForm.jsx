import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import './forms.css';

const LoginForm = ({ onSignupClick, onSubmit }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.form 
            className="auth-form"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
        >
            <motion.h2 variants={itemVariants}>Sign In</motion.h2>
            <motion.div className="input-group" variants={itemVariants}>
                <Mail className="input-icon" />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <div className="input-highlight" />
            </motion.div>
            <motion.div className="input-group" variants={itemVariants}>
                <Lock className="input-icon" />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <div className="input-highlight" />
            </motion.div>
            <motion.button 
                type="submit" 
                className="auth-button"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                Sign In
            </motion.button>
            <p className="auth-footer">
                Don't have an account? 
                <button type="button" className="link-button" onClick={onSignupClick}>
                    Sign Up
                </button>
            </p>
        </motion.form>
    );
};

export default LoginForm;
