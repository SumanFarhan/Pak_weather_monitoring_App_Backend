const routes = require('express').Router();
const userController = require('../Controller/userController');

routes.post('/addUser', userController.addUser);
// routes.get('/getUser', userController.getUser);


module.exports = routes;