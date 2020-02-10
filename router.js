// console.log("I am executed immediately.");
// module.exports = "I am the export for the router file!";



const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');


router.get('/', userController.home);




module.exports = router;