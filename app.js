// Installed nodemon and added to package.json so instead of npm app use npm run watch
// #1 npm init -y  - this will create package.json recipe file
// #2 npm install express - this will install express.js


const express = require('express')
const app = express()

const router = require('./router')


app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

app.listen(3000)