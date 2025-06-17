import express from 'express';
import Profile from '../models/Profile.model.js';
import bcrypt from 'bcryptjs';


const router = express.Router();

router.post('/signup', async (req, res) => {
    const {email,password,username} = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        // const alreadyExists = await Profile.findOne(email); 
        // if (alreadyExists) {
        //     return res.status(400).json({success: false , error: 'User already exists' });
        // }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Profile({
            username: username,
            email: email,
            passwordHash: hashedPassword,
        });
        await user.save();
        res.status(201).json({ success: true, message: 'User created', user: {...user._doc , passwordHash: undefined} });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});


router.get('/login', (req, res) => {
    res.send('Login route');
});

export default router;