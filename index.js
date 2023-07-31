
// const http = require('http')
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log("App listening on port 3000");
});

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