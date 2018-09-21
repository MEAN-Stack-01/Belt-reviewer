const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoosedb');

const db = mongoose.connection;
db.on('error',(error) => {
    console.log("error during connection",error);
});

db.on('open',() => {
    console.log("Mongo is now connected!");
});

module.exports = mongoose;
