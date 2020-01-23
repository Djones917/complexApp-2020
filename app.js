// Installed nodemon and added to package.json so instead of npm app use npm run watch
// #1 npm init -y  - this will create package.json recipe file
// #2 npm install express - this will install express.js

// #3 NOW WITH EXPRESS INSTALLED REQUIRE IN EXPRESSS!
const express = require('express');
// #4
const app = express();


// #9
const router = require('./router');

// 8
app.use(express.static('public'));

// #7
app.set('views', 'views');
app.set('view engine', 'ejs');

// #5
app.get('/', function(req, res) {
    //res.send("Welcome to our app!");
    res.render('home-guest');
});


// #6 app listen the test it in gitbash with node app and then localhost:3000
app.listen(3000);