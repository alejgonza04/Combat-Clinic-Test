import express from 'express';
import { getSessions, addSession } from '../controllers/session.js';
import auth from '../middleware/auth.js';
import passport from 'passport';

const router = express.Router();

router.get('/', getSessions);
router.post('/', passport.authenticate('jwt', { session: false }), addSession);

export default router;
