import './login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoginForm from '../../sections/forms/LoginForm';
import SignupForm from '../../sections/forms/SignupForm';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleLogin = (data) => {
        console.log('Login:', data);
        navigate('/home');
    };

    const handleSignup = (data) => {
        console.log('Signup:', data);
        // Handle signup logic
        setIsLogin(true); // Switch to login after successful signup
    };

    return (
        <div className="login-container">
            <motion.div className="login-image"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="image-overlay">
                    <h1>Welcome</h1>
                    <p>Share your moments with the world</p>
                </div>
            </motion.div>

            <motion.div className="form-container"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                {isLogin ? (
                    <LoginForm 
                        onSignupClick={() => setIsLogin(false)}
                        onSubmit={handleLogin}
                    />
                ) : (
                    <SignupForm 
                        onLoginClick={() => setIsLogin(true)}
                        onSubmit={handleSignup}
                    />
                )}
            </motion.div>
        </div>
    );
};

export default Login;