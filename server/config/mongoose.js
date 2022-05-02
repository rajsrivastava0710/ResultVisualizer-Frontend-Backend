//require the library
const mongoose = require('mongoose');
require('dotenv').config()

//connect to the database
mongoose.connect(process.env.DB_URI || 'mongodb://localhost/knitResultScrap',
  {useNewUrlParser:true}
  );

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
  console.log("Successfully connected to the database");
});

