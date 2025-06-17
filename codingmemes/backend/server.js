import express from 'express';
import { configDotenv } from 'dotenv';
import { dbConfig } from './config/db.js';
import cors from 'cors';
import Profile from './models/Profile.model.js';
import authRoutes from './routes/auth.routes.js';

configDotenv();
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/auth",authRoutes)

// app.post('/users', async (req, res) => {
  
//   const userData = req.body;
//   if (!userData.username || !userData.email || !userData.password) {
//     return res.status(400).json({ error: 'Missing required fields' });
//   }
//   const user = new Profile(userData);
//   try {
//     await user.save();
//     res.status(201).json({ success: true, message: 'User created',data: user });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Error creating user', error: err.message });
//   }
// });


app.listen(5000, () => {
  dbConfig();
  console.log('Server is running on http://localhost:5000 hello');
})