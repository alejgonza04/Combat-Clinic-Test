import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authMiddleware = async (req, res, next) => {

    // Get the token from the request headers
    const token = req.header('Authorization');
    
    // Check if token is present
    if (!token) {
      return res.status(401).json({ message: 'Authorization denied. No token provided.' });
    }
    
    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
      // Find the user associated with the token
      const user = await User.findById(decoded.user.id).select('-password');
    
      // Check if user exists
      if (!user) {
        return res.status(401).json({ message: 'Authorization denied. Invalid token.' });
      }
    
      // Attach the user object to the request
      req.user = user;
      next(); // Call the next middleware
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Server Error' });
    }
};

export default authMiddleware;
