const weather = require('../Model/weatherModel');
const weatherAPI = require('../Model/weatherAPIModel');
const axios = require('axios');

exports.addweather = (req, res) => {
    const weatherDetail = new weather({
        cityName: req.body.cityName,
        temperatureUnit: req.body.temperatureUnit
    })

    weatherDetail.save((err, weatherData) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }
        else {
            res.status(200).json({ message: weatherData })
        }
    })
}

exports.getWeather = async (req, res) => {
    const API_KEY = "c21d24bee643583f8fedd5a633a2db0a"
    const city = req.query.city;
    const apiKey = API_KEY;
    const units = req.query.units || 'metric';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`;

    await axios.get(url)
        .then(response => {
            console.log(response);

            const data = response.data
            const obj = {
                country: data.sys.country,
                city_name: data.name,
                weather_Desciption: data.weather[0].description,
                temperature: data.main.temp,
                feels_like: data.main.feels_like,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                wind_Speed: data.wind.speed,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
            }

            console.log('data herrrrrrre', obj)

            const weatherAPIDetail = new weatherAPI({
                country: obj.country,
                cityname: obj.city_name,
                weather_Desciption: obj.weather_Desciption,
                temperature: obj.temperature,
                feels_like: obj.feels_like,
                pressure: obj.pressure,
                humidity: obj.humidity,
                wind_Speed: obj.wind_Speed,
                sunrise: obj.sunrise,
                sunset: obj.sunset
            }
            );
            weatherAPIDetail.save()
                .then(savedData => {
                    console.log(`Data Saved : ${savedData}`)
                })
                .catch(error => {
                    console.log('erroor', error)
                })
                res.json(obj)
        })

        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error getting weather data' });
        });
}

    // await axios.get(url)
    //     .then(response => {
    //         res.json(
    //             {Data:{
    //                 country: data.sys.country,
    //                 city_name: data.name,
    //                 weather_Desciption: data.weather[0].description,
    //                 temperature: data.main.temp,
    //                 feels_like: data.main.feels_like,
    //                 pressure: data.main.pressure,
    //                 humidity: data.main.humidity,
    //                 wind_Speed: data.wind.speed,
    //                 sunrise: data.sys.sunrise,
    //                 sunset: data.sys.sunset,
    //             }})


            // const weatherAPIDetail = new weatherAPI({
            //     country: res.country,
            //     city_name: res.city_name,
            //     weather_Desciption: res.weather_Desciption,
            //     feels_like: res.weather_Desciption,
            //     temperature: res.temperature,
            //     pressure: res.pressure,
            //     humidity: res.humidity,
            //     wind_Speed: res.wind_Speed,
            //     sunrise: res.sunrise,
            //     sunset: res.sunset
            // })



            // weatherAPIDetail.save(weatherAPIDetail)
                // if (err) {
                //     res.status(500).json({ message: err.message })
                // }
                // else {
                //     res.status(200).json({ message: weatherData })
                // }





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


