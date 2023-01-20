const user = require('../Model/userModel');

exports.addUser = (req, res) => {

        const userDetail = new user({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        userDetail.save((err, userData) => {
            if (err) {
                res.status(500).json({ message: err.message })
            } 
            else {
                res.status(200).json({ message: userData })
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


