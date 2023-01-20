const express = require('express');
const app = express();
const routes = require('./router/router')
const mongoose = require('mongoose');
const cors = require('cors');

// require('dotenv').config();
app.use(cors());

try {
    mongoose.connect('mongodb+srv://aisha_Kapadia:Chicken%4098@cluster0.4jnfayp.mongodb.net/WeatherAppDB',
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    )
    .then(console.log('DB connection'))
} catch (error) {
    console.log('Error in DB connection');
}

process.on('UnhandledRejection', error => {
    console.log('DB error', error);
});
    
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);


app.listen(3007);