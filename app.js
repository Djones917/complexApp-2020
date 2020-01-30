// Installed nodemon and added to package.json so instead of npm app use npm run watch
// #1 npm init -y  - this will create package.json recipe file
// #2 npm install express - this will install express.js


const express = require('express');

const app = express();


//  This will run and return anything in router.js object, array, function ect.
const router = require('./router');
console.log(router);


app.use(express.static('public'));


app.set('views', 'views');
app.set('view engine', 'ejs');





// app listen the test it in gitbash with node app and then localhost:3000
app.listen(3000);