const pkg = require('jsonwebtoken');
const { TOKEN_KEY } = require('../config/constants');
const users = require('../models/users');

const { verify } = pkg;

module.exports = async (req, res, next) => {
  if (req.headers.authorization) {
    verify(
      req.headers.authorization.split(' ')[1],
      TOKEN_KEY,
      (err, payload) => {
        if (err) next()
        else if (payload) {
          for (let user of users) {
            if (user.id === payload.id) {
              req.user = user
              next()
            }
          }

          if (!req.user) next()
        }
      }
    )
  }

  next()
};