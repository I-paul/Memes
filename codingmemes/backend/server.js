import express from 'express';
import { configDotenv } from 'dotenv';
import { dbConfig } from './config/db.js';

configDotenv();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  dbConfig();
  console.log('Server is running on http://localhost:5000 hello');
})