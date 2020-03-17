const usersCollection = require('../db').collection("users");
const validator = require("validator");

// Constructor function - Blue Print Object
let User = function(data) {
    this.data = data;
    this.errors = [];
}


User.prototype.cleanUp = function() {
    if(typeof(this.data.username) != "string") {this.data.username = ""}
    if(typeof(this.data.email) != "string") {this.data.email = ""}
    if(typeof(this.data.password) != "string") {this.data.password = ""}

    // Get rid of any B.S. properties!
    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password
    }
}


User.prototype.validate = function() {
   if(this.data.username == "") {this.errors.push("You must provide a username!")}
   if(this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("Username can only contain letters and numbers!")}
   if(!validator.isEmail(this.data.email)) {this.errors.push("You must provide a valid email address!")}
   if(this.data.password == "") {this.errors.push("You must provide a valid password!")}
   if(this.data.password.length > 0 && this.data.password.length < 12) {this.errors.push("Password must have atleast 12 charaters!")}
   if(this.data.password.length > 100) {this.errors.push("Password can not exceed more than 100 charaters!")}
   if(this.data.username.length > 0 && this.data.username.length < 3) {this.errors.push("Username must have atleast 3 charaters!")}
   if(this.data.username.length > 30) {this.errors.push("Username can not exceed more than 30 charaters!")}
}




User.prototype.login = function() {
    this.cleanUp();
    usersCollection.findOne({username: this.data.username}, function(err, attemptedUser) {
        if(attemptedUser && attemptedUser.password == this.data.password) {

        } else {

        }
    })
}

// add a method to constructor above
User.prototype.register = function() {
    // Step 1: validate user data
    this.cleanUp();
    this.validate();
    // Step 2: only if there are no validation errors
    // then save the user data into database
    if(!this.errors.length) {
      usersCollection.insertOne(this.data);
    }
};

module.exports = User;