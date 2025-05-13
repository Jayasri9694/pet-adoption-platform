const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  console.log('Authorization Header:', token);

  if (!token) {
    console.error('No token provided');
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Invalid token:', error.message);
    res.status(400).json({ message: 'Access denied. Invalid token.' });
  }
};
