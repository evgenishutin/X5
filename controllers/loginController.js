const pkg = require('jsonwebtoken');
const users = require('../models/users');
const { TOKEN_KEY } = require('../config/constants');

const { sign } = pkg;

module.exports = async (req, res) => {
  for (let user of users) {
    if (
      req.body.email === user.email &&
      req.body.password === user.password
    ) {
      return res.status(200).json({
        id: user.id,
        email: user.email,
        token: sign({ id: user.id }, TOKEN_KEY),
      })
    }
  }

  return res.status(404).json({ message: 'User not found' })
};