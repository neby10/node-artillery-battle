
// const http = require('http')
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

// set view engine
const ejs = require('ejs');
app.set('view engine', 'ejs');

// set middleware for POST requests
app.use(express.urlencoded({ extended: false }));

// initialize socket.io
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const PORT = 3000;

server.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});

// utility functions
const { makeId } = require("./game/utils");

// gameLogic functions
const { artilleryBattleSocketEventHandler, gameLoop, initGameState, gameRooms, gameState } = require('./game/gameLogic')

// handle socket connections
io.on('connection', (socket) => {
    // handle connect
    console.log("a user connected");

    artilleryBattleSocketEventHandler(socket, io);

    socket.on('disconnect', () => {
        // handle disconnect
        console.log("a user disconnected");
    })
})

// ROUTING
// HOME
app.get('/', (req, res) => {
    res.render('home');
});

// ABOUT
app.get('/about', (req, res) => {
    res.render('about');
});