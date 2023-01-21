const user = require('../Model/userModel');
const bcrypt = require('bcrypt');

exports.addUser = (req, res) => {

    const userDetail = new user({
        name: req.body.userName,
        email: req.body.email,
        city: req.body.city,
        password: bcrypt.hashSync(req.body.password,8),
    })

    userDetail.save((err, userData) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }
        else {
            res.status(200).json({ message: "user added successfully" })
        }
    })
}


function isValidPassword(user, password) {
    return bcrypt.compareSync(password, user.password);
}

// exports.findUser = (req, res) => {
//     user.find({ email: req.body.email }, function (err, user) {
//         if (!user) {
//             res.status(400).json({ message: 'User not found' })
//         }
//         if (!isValidPassword(user, req.body.password)) {
//             return res.status(401).json({message: 'Invalid password' })
//         }
//         if (err) {
//             res.status(500).json({ message: err.message })
//         }
//         res.status(200)
//             .json({user: {
//                     id: user.id,
//                     username: user.name,
//                     city: user.city
//                 },
//                 message: 'Login successful'
//             })
//     })
// }


exports.findUser = (req, res) => {
    user.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (!user) {
            return res.status(400).json({message:'User not found'})
            }
            if (!isValidPassword(user, req.body.password)) {
                return res.status(401).json({message:'Invalid password'})
            }
            
            const token = jwt.sign({ _id: user._id,email:user.email }, process.env.API_SECRET, { expiresIn: 9999 })
            
            res.status(200)
                .json({
                   userID: user._id,
                   accessToken:token
                })
    })
}
// exports.getOneUser = (req, res) => {
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


