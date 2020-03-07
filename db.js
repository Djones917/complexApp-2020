const mongodb = require('mongodb');

const connectionString = 'mongodb+srv://wishListApp:12345@cluster0-kccxp.mongodb.net/ComplexApp?retryWrites=true&w=majority';

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
   module.exports = client.db();
   const app = require('./app');
   app.listen(3000);
});

