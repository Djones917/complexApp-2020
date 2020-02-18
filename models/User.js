// Constructor function - Blue Print Object
let User = function(data) {
    this.data = data;
}

// add a method to constructor above
User.prototype.jump = function() {};

module.exports = User;