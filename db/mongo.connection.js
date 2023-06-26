var mongoose = require('mongoose');

var mongoDB_URI = 'mongodb://localhost:27017/webt01';
mongoose.connect(mongoDB_URI, {useNewUrlParser:true});

var db = mongoose.connection;

db.on(
    'connected',
    () => {
        console.log(`Mongoose connected to ${mongoDB_URI}`)
    }
);

db.on(
    'disconnected',
    () => {
        console.log(`Mongoose disconnected to ${mongoDB_URI}`)
    }
);

db.on(
    'error',
    (err) => {
        console.log(`Mongoose Error: ${err}`)
    }
);