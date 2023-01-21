const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var weatherAPISchema=new Schema(
    {
        country: {
            type: String,
            required: [true, 'country name is required']
        },
        cityname: { 
            type: String, 
            required: [true, 'city name is required']
        },
        weather_Desciption: {
            type: String,
            required: [true, 'weather Desciption is required']
        },
        temperature: { 
            type: String, 
            required: [true, 'temperature is required']
        },
        feels_like: {
            type: String,
            required: [true, 'feels_like is required']
        },
        pressure: { 
            type: String, 
            required: [true, 'pressure is required']
        },
        humidity: {
            type: String,
            required: [true, 'humidity is required']
        },
        wind_Speed: { 
            type: String, 
            required: [true, 'wind_Speed is required']
        },
        sunrise: {
            type: String,
            required: [true, 'sunrise is required']
        },
        sunset: { 
            type: String, 
            required: [true, 'sunset is required']
        }

    }
)


module.exports=mongoose.model('WeatherAPI',weatherAPISchema)