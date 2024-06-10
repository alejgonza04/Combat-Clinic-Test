import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import sessionRoutes from './routes/session.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: 'https://verdant-fairy-45e354.netlify.app'
}));
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/auth', authRoutes);
app.use('/sessions', sessionRoutes);

const startServer = async () => {
    try {
        app.listen(8080, () => console.log('Server started on port http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }
};

startServer();
