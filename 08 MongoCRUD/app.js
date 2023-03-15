
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
// const mongoose = require('mongoose');

const app = express();


// Set the port number from .env file or use 3000 if not set
const PORT = process.env.PORT || 3000;

//include mongoose configuration
const mongoose = require('./config/dbconfig')

// // setup MongoDB connection
// const uri = "mongodb+srv://r00tUs3r:lpvBmlS1RV3LJCSt@cluster0.mypkyjc.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Define the index route
app.get("/", (req, res) => {
  res.render("index");
});

// Define the /about route
app.get('/about', (req, res) => {
  // Render the about page without passing any data
  res.render('about');
});

// Define the /contact route
app.get('/contact', (req, res) => {
  // Render the contact page without passing any data
  res.render('contact');
});

// define POST /contact route
app.post('/contact', (req, res) => {
  // get the data from the request body

  console.log(req.body);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
