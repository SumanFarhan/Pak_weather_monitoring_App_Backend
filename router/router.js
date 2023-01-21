const routes = require('express').Router();
const userController = require('../Controller/userController');

routes.post('/signupUser', userController.addUser);
routes.get('/loginUser', userController.findUser);


module.exports = routes;