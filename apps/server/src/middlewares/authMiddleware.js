const requireAuth = async (req, res, next) => {
  try {
    // your middleware  logic here
    next();
  } catch (err) {
    return res.status(400).json({ error: 'Invalid request' });
  }
};

module.exports = requireAuth;
