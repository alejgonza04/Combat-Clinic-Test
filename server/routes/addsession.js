import express from 'express';
import mongoose from 'mongoose'; // Import mongoose
import authMiddleware from '../middleware/authMiddleware.js';
import Session from '../models/Session.js';

const router = express.Router();

// Add middleware to ensure authentication before adding a session
router.use(authMiddleware);

router.post('/addsession', async (req, res) => {
    try {
        const { sessionType, sessionLength, sparringTime, techniques, date } = req.body;
        
        // Get the user ID from the authenticated user's data
        const userId = req.user.id;

        const session = new Session({
            sessionType,
            sessionLength,
            sparringTime,
            techniques,
            date,
            user: userId // Associate the session with the logged-in user
        });
        
        // Save session to database
        await session.save();
        res.status(201).json({ success: true, data: session });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

// Retrieve sessions route
router.get('/sessions', async (req, res) => {
    try {
        const userId = req.user.id;

        // Retrieve sessions associated with the logged-in user
        const sessions = await Session.find({ user: userId });

        res.status(200).json({ success: true, data: sessions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

export default router;
