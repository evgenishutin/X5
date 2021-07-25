const dotenv = require('dotenv');
dotenv.config();

exports.TOKEN_KEY = process.env.TOKEN_KEY;
exports.PORT = process.env.PORT;