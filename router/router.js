const routes = require('express').Router();
const userController = require('../Controller/userController');
const weatherController=require('../Controller/Weathercontroller')




routes.post('/signupUser', userController.addUser);
routes.post('/loginUser', userController.findUser);
routes.post('/addweather',weatherController.addweather)

routes.get('/weather',weatherController.getWeather);



module.exports = routes;