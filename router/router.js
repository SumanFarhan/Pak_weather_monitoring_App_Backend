const routes = require('express').Router();
const userController = require('../Controller/userController');
const weatherController=require('../Controller/Weathercontroller')

<<<<<<< Updated upstream
routes.post('/signupUser', userController.addUser);
routes.post('/loginUser', userController.findUser);

=======
routes.post('/addUser', userController.addUser);
// routes.get('/getUser', userController.getUser);
routes.post('/addweather',weatherController.addweather)
>>>>>>> Stashed changes

module.exports = routes;