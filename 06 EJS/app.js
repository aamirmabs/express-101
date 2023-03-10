
const express = require('express');
const app = express();

// Set the port number from .env file or use 3000 if not set
const PORT = process.env.PORT || 3000;

// fetching the blog data from blogData.json
const blogData = require("./blogData.json");

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Define the index route
app.get("/", (req, res) => {
  // you will first fetch the data to be rendered
  // often, you will make an async call to fetch the data from a database

  // in our case, let's initialize the blog data from blogData.json
  const blogs = blogData.blogs;

  // render the index.ejs file and pass the data (the blogs variable in our case) to be rendered
  res.render("index", { blogs });
});

// Define the blog post route
app.get("/blog/:id", (req, res) => {
  // we will get the blog id from the url params
  const id = req.params.id;

  // you will then fetch the data to be rendered from the database

  // in our case we will fetch the blog entry using the id
  const blog = blogData.blogs[id];

  // render the blog.ejs file and pass the fetched data to be rendered
  res.render("blog", { blog });
});

// Define the /about route
app.get('/about', (req, res) => {
  // Render the about page without passing any data
  res.render('about');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
