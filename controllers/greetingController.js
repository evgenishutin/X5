module.exports = async (req, res) => {
  if (req.user) {
    return res.status(200).json('Welcome!');
  } else {
    return res.status(401).json({ message: 'Not authorized' });
  }
};