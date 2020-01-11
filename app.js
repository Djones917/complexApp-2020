// #1 npm init -y  - this will create package.json recipe file
// #2 npm install express - this will install express.js

// #3 NOW WITH EXPRESS INSTALLED REQUIRE IN EXPRESSS!
const express = require('express');
// #4
const app = express();


// #5
app.get('/', function(req, res) {
    res.send("Welcome to our app!");
});


// #6
app.listen(3000);