import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import Session from '../models/Session.js';


const router = express.Router();

// Add middleware to ensure authentication before adding a session
router.use(authMiddleware);

router.post('/addsession', authMiddleware, async (req, res) => {
    try {
        const { sessionType, sessionLength, sparringTime, techniques, date } = req.body;
        const userId = req.user.id; // Get user ID from token
        // Save session associated with the user
        const session = new Session({ sessionType, sessionLength, sparringTime, techniques, date, userId });
        await session.save();
        res.json({ message: 'Session added successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Route to get user's sessions
router.get('/usersessions', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id; // Get user ID from token
        const sessions = await Session.find({ userId });
        res.json(sessions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;
