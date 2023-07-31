
// const http = require('http')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

app.listen(3000, () => {
    console.log("App listening on port 3000");
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "templates", "home.html"));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, "templates", "about.html"));
});

app.get('/one-player', (req, res) => {
    res.sendFile(path.resolve(__dirname, "templates", "one_player.html"));
});

app.get('/two-player', (req, res) => {
    res.sendFile(path.resolve(__dirname, "templates", "two_player.html"))
});