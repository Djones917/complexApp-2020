// Constructor function - Blue Print Object
let User = function(data) {
    this.data = data;
}


User.prototype.validate = function() {
    
}


// add a method to constructor above
User.prototype.register = function() {
    // Step 1: validate user data

    // Step 2: only if there are no validation errors

    // Step 3: then save the user data into database
};

module.exports = User;