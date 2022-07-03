const userRoute = require('express').Router();
const UserController = require('../controllers/UserController');
const { authentication } = require('../middlewares/auth');

userRoute.get('/', UserController.getUser);
userRoute.post('/register', UserController.register);
userRoute.post('/login', UserController.login);
userRoute.get('/detail', authentication, UserController.getUserbyId);

module.exports = userRoute;