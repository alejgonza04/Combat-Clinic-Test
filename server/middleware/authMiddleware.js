
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authMiddleware = async (req, res, next) => {
    const authHeader = req.header('Authorization');
  
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization denied. No token provided.' });
    }
  
    const token = authHeader.split(' ')[1]; // Extract the token
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.user.id).select('-password');
  
      if (!user) {
        return res.status(401).json({ message: 'Authorization denied. Invalid token.' });
      }
  
      req.user = user;
      next();
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Server Error' });
    }
  };
  

export default authMiddleware;
