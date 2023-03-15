
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set the port number from .env file or use 3000 if not set
const PORT = process.env.PORT || 3000;

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
