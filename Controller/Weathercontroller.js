const weather = require('../Model/weatherModel');
const weatherAPI = require('../Model/weatherAPIModel');
const API_KEY = "c21d24bee643583f8fedd5a633a2db0a"
const axios = require('axios');
const user = require('../Model/userModel');

exports.addweather = async (req, res) => {

    try {
        console.log(req.body._id)
        console.log(req.body)
        const result = await user.findByIdAndUpdate({ _id: req.body._id },
            {
                $push: {
                    multiplecities: req.body.cities
                }

            },
            {
                new: true
            }

        )
        // console.log(result)
        // res.status(200).json({ message: result })
    }
    catch (error) {
        console.log(error)
    }

    weatherAPI.findOne({ cityname: req.body.cities })
        .exec((err, user) => {
            // function (err, activityData) {
            if (err) {
                console.log('same city has been called')
                console.log(err)
            }
            else {
                  weatherDetail.save((err, weatherData) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }
        else {
            res.status(200).json({ message: weatherData, data: resp })

    //     }
                const obj = {
                    cities: req.body.cities,
                    units: req.body.temperatureUnit
                }
                console.log(obj)
                this.getWeather(obj)
                    // .then((_data) =>
                    //     res.status(200).json({  data: _data })
                    // )
                    .then(savedData => {
                        console.log('Data Saved 2 :', (JSON.stringify(savedData))
                        )
                    })
                    .catch(error => {
                        console.log('error', error)
                    })


            }
        })










  




}


exports.getWeather = async (req, res) => {
    console.log(req);
    const city = req.cities
    const apiKey = API_KEY;
    const units = req.units || 'metric';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`;
    console.log(url);
    let obj;
    await axios.get(url)
        .then(
            response => {
                
                const data = response.data
                obj = {
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


                // const weatherAPIDetail = new weatherAPI({
                //     country: obj.country,
                //     cityname: obj.city_name,
                //     weather_Desciption: obj.weather_Desciption,
                //     temperature: obj.temperature,
                //     feels_like: obj.feels_like,
                //     pressure: obj.pressure,
                //     humidity: obj.humidity,
                //     wind_Speed: obj.wind_Speed,
                //     sunrise: obj.sunrise,
                //     sunset: obj.sunset
                // }
                // );
                // await weatherAPIDetail.save()
                //     .then(savedData => {
                //         console.log(`Data Saved : ${savedData}`)
                //     })
                //     .catch(error => {
                //         console.log('error', error)
                //     })

                //res.send({ message: obj });
                // res.status(200).json({ obj });
                 return (obj)
            })

        .catch(error => {
            //console.log(error);
            // res.status(500).json({ message: 'Error getting weather data', error });
            // res.status(500).json({ message: 'Error getting weather data' });
        }
        );

     return (obj)
}


exports.getFiveCities = (req, res) => {
    const cities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta']
    const apiKey = API_KEY;
    const units = 'metric';
    const weatherData = [];

    for (let i = 0; i < cities.length; i++) {
        const city = cities[i];
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`;

        axios.get(url)
            .then(response => {
                weatherData.push(response.data);
                if (weatherData.length === cities.length) {
                    res.json([
                        Firstcity = {
                            city_name: weatherData[0].name,
                            weather_Desciption: weatherData[0].weather[0].description,
                            temperature: weatherData[0].main.temp,
                            feels_like: weatherData[0].main.feels_like,
                            pressure: weatherData[0].main.pressure,
                            humidity: weatherData[0].main.humidity,
                            wind_Speed: weatherData[0].wind.speed,
                            sunrise: weatherData[0].sys.sunrise,
                            sunset: weatherData[0].sys.sunset
                        },
                        Secondcity = {
                            city_name: weatherData[1].name,
                            weather_Desciption: weatherData[1].weather[0].description,
                            temperature: weatherData[1].main.temp,
                            feels_like: weatherData[1].main.feels_like,
                            pressure: weatherData[1].main.pressure,
                            humidity: weatherData[1].main.humidity,
                            wind_Speed: weatherData[1].wind.speed,
                            sunrise: weatherData[1].sys.sunrise,
                            sunset: weatherData[1].sys.sunset
                        },
                        Thirdcity = {
                            city_name: weatherData[2].name,
                            weather_Desciption: weatherData[2].weather[0].description,
                            temperature: weatherData[2].main.temp,
                            feels_like: weatherData[2].main.feels_like,
                            pressure: weatherData[2].main.pressure,
                            humidity: weatherData[2].main.humidity,
                            wind_Speed: weatherData[2].wind.speed,
                            sunrise: weatherData[2].sys.sunrise,
                            sunset: weatherData[2].sys.sunset
                        },
                        Fourthcity = {
                            city_name: weatherData[3].name,
                            weather_Desciption: weatherData[3].weather[0].description,
                            temperature: weatherData[3].main.temp,
                            feels_like: weatherData[3].main.feels_like,
                            pressure: weatherData[3].main.pressure,
                            humidity: weatherData[3].main.humidity,
                            wind_Speed: weatherData[3].wind.speed,
                            sunrise: weatherData[3].sys.sunrise,
                            sunset: weatherData[3].sys.sunset
                        },
                        Fifthcity = {
                            city_name: weatherData[4].name,
                            weather_Desciption: weatherData[4].weather[0].description,
                            temperature: weatherData[4].main.temp,
                            feels_like: weatherData[4].main.feels_like,
                            pressure: weatherData[4].main.pressure,
                            humidity: weatherData[4].main.humidity,
                            wind_Speed: weatherData[4].wind.speed,
                            sunrise: weatherData[4].sys.sunrise,
                            sunset: weatherData[4].sys.sunset
                        }
                    ]);
                }
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ message: 'Error getting weather data' });
            });
    }
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


