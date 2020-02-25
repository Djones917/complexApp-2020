// Constructor function - Blue Print Object
let User = function(data) {
    this.data = data;
    this.errors = [];
}


User.prototype.validate = function() {
   if(this.data.username == "") {this.errors.push("You must provide a username!")}
   if(this.data.email == "") {this.errors.push("You must provide a valid email address!")}
   if(this.data.password == "") {this.errors.push("You must provide a valid password!")}
   if(this.data.password.length > 0 && this.data.password.length < 12) {this.errors.push("Password must have atleast 12 charaters!")}
   if(this.data.password.length > 100) {this.errors.push("Password can not exceed more than 100 charaters!")}
   if(this.data.username.length > 0 && this.data.username.length < 3) {this.errors.push("Username must have atleast 3 charaters!")}
   if(this.data.username.length > 30) {this.errors.push("Username can not exceed more than 30 charaters!")}
}


// add a method to constructor above
User.prototype.register = function() {
    // Step 1: validate user data
    this.validate();
    // Step 2: only if there are no validation errors

    // Step 3: then save the user data into database
};

module.exports = User;