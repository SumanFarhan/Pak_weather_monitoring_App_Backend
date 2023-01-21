const weather = require('../Model/weatherModel');

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


