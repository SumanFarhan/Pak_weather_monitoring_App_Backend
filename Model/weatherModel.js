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
            enum: ['F', 'C'], 
            required: [true, 'Select one temperature unit']
        }
    }
)


module.exports=mongoose.model('Weather',weatherSchema)