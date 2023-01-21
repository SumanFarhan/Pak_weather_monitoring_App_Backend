const routes = require('express').Router();
const userController = require('../Controller/userController');
const weatherController=require('../Controller/Weathercontroller')


const API_KEY="c21d24bee643583f8fedd5a633a2db0a"

routes.post('/signupUser', userController.addUser);
routes.post('/loginUser', userController.findUser);
routes.post('/addweather',weatherController.addweather)

routes.get('/weather',weatherController.getWeather);



module.exports = routes;