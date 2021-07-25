const { Router } = require('express');
const loginController = require('../controllers/loginController');
const greetingController = require('../controllers/greetingController');
const auth = require('../middleware/auth');

const routers = Router();

routers.post('/login', loginController);
routers.get('/greeting', auth, greetingController);

module.exports = routers;