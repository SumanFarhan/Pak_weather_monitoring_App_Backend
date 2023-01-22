const express = require('express');
const app = express();
const routes = require('./router/router')
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);

// require('dotenv').config();
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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);

const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000"
    }
});


io.on('connection', (socket) => {
    console.log(`A user connected:${socket.id}`)
    socket.on('weather-data', (data) => {
      io.emit('weather-data', data);
      console.log('weather data by socket emit')
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});


server.listen(3007, () => {
    console.log('Server running on port 3007');
});
