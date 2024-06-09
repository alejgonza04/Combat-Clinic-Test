import express from 'express';
import { authMiddleware } from './routes/auth.js';
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
        
        //save session to database
        await session.save();
        res.status(201).json({ success: true, data: session });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

export default router;