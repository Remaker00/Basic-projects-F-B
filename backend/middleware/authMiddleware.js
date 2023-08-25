const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Assumes token is in the format "Bearer <token>"
    const decodedToken = jwt.verify(token, 'secret_key'); // Replace with your actual JWT secret key
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};
