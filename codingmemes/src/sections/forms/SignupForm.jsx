import React from 'react';
import { Mail, Lock, User } from 'lucide-react';
import './forms.css';

const SignupForm = ({ onLoginClick, onSubmit }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password, username });
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <div className="input-group">
                <User className="input-icon" />
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
            </div>
            <div className="input-group">
                <Mail className="input-icon" />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div className="input-group">
                <Lock className="input-icon" />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit" className="auth-button">
                Sign Up
            </button>
            <p className="auth-footer">
                Already have an account? 
                <button type="button" className="link-button" onClick={onLoginClick}>
                    Sign In
                </button>
            </p>
        </form>
    );
};

export default SignupForm;
