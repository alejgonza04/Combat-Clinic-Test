// controllers/sessionController.js
import Session from '../models/Session.js';
import User from '../models/User.js';

const addSession = async (req, res) => {
    const { sessionType, sessionLength, sparringTime, techniques, date } = req.body;
    const userId = req.user.id;

    try {
        const session = new Session({ sessionType, sessionLength, sparringTime, techniques, date, user: userId });
        await session.save();

        const user = await User.findById(userId);
        user.sessions.push(session);
        await user.save();

        res.json(session);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

const getSessions = async (req, res) => {
    const userId = req.user.id;

    try {
        const sessions = await Session.find({ user: userId });
        res.json(sessions);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export { addSession, getSessions };
