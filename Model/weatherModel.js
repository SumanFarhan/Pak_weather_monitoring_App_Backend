const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var weatherSchema=new Schema(
    {
        cityName: {
            type: String,
            required: [true, 'City name is required']
        },
        temperatureUnit: { 
            type: String, 
            enum: ['imperial', 'metric'], 
            required: [true, 'Select one temperature unit']
        },
        userID: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    }
)

module.exports=mongoose.model('Weather',weatherSchema)