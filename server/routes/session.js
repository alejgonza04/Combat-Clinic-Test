import express from 'express';
import { addSession, getSessions } from '../controllers/sessionController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/add', auth, addSession);
router.get('/', auth, getSessions);

export default router;
