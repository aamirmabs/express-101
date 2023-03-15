const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://r00tUs3r:lpvBmlS1RV3LJCSt@cluster0.mypkyjc.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected successfully to MongoDB!")
});

module.exports = mongoose;
