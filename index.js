
// const http = require('http')
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

// initialize socket.io
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)

const PORT = 3000

server.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});

// handle socket connections
io.on('connection', (socket) => {
    // handle connect
    console.log("a user connected")

    socket.on('disconnect', () => {
        // handle disconnect
        console.log("a user disconnected")
    })
})

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/one-player', (req, res) => {
    res.render('one_player')
});

app.get('/two-player', (req, res) => {
    res.render('two_player')
});