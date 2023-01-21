const routes = require('express').Router();
const userController = require('../Controller/userController');
const weatherController=require('../Controller/Weathercontroller')

<<<<<<< Updated upstream



=======
>>>>>>> Stashed changes
routes.post('/signupUser', userController.addUser);
routes.post('/loginUser', userController.findUser);
routes.post('/addweather',weatherController.addweather)
routes.get('/weather',weatherController.getWeather)
routes.get('/getFiveCities',weatherController.getFiveCities)


module.exports = routes;