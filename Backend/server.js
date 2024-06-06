import express from 'express';
import connectDB from './config/db.js';
import movieRoutes from './routes/movieRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', movieRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
