// Set up the express package: 
const express = require('express');
const app = express();
let port = 3000;

// Set up the bodyParser package:
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the 'public' package to load static stuff like CSS and images
app.use(express.static('public'));

// Set up 'ejs package:
const ejs = require('ejs');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    let today = new Date();
    let currentDayIndex = today.getDay();
    let day = today.toLocaleString('en-us', { weekday: 'long' });

    res.render('list', { dayOfTheWeek: day });
});

app.listen(port, function () {
    console.log(`Server initiated at port ${port}`)
});