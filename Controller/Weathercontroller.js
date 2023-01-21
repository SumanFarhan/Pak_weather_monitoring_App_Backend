const weather = require('../Model/weatherModel');
const axios = require('axios');

exports.addweather = (req, res) => {
        const weatherDetail = new weather({
            cityName: req.body.cityName,
            temperatureUnit:req.body.temperatureUnit
        })

        weatherDetail.save((err, weatherData)=> {
            if (err) {
                res.status(500).json({ message: err.message })
            } 
            else {
                res.status(200).json({ message: weatherData })
            }
        })
}

exports.getWeather=(req, res) => {
    const city = req.query.city;
    const apiKey = API_KEY;
    const units = req.query.units || 'metric';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`;

    axios.get(url)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error getting weather data' });
        });
}

// exports.getOneCityWeather = (req, res) => {
//     const getid = req.params.id
//     activities.findOne({ _id: getid }, 
//         function (err, activityData) {
//         if (err) {
//             res.status(500).json({ message: err })
//         }
//         else {
//             res.status(200).json({ message: activityData })
//         }
//     })
// }

// exports.getUser = (req, res) => {
//     user.find({}, function (err, userData) {
//         if (err) {
//             res.status(500).json({ message: err })
//         }
//         else {
//             res.status(200).json({ message: activityData })
//         }
//     })
// }

// exports.getOneActivity = (req, res) => {
//     const getid = req.params.id
//     activities.findOne({ _id: getid }, 
//         function (err, activityData) {
//         if (err) {
//             res.status(500).json({ message: err })
//         }
//         else {
//             res.status(200).json({ message: activityData })
//         }
//     })
// }

// exports.editActivity = async (req, res) => {
//     try {
//         const result = await activities.findByIdAndUpdate({ _id: req.body._id },
//             {
//                 $set: {
//                     name: req.body.name
//                 }

//             },
//             {
//                 new: true
//             }

//         )
//         console.log("before query execution", result);
//         res.status(200).json({ message: result })
//     }
//     catch (err) {
//         res.status(500).json({ message: err })
//         console.log(err)
//     }
// }


