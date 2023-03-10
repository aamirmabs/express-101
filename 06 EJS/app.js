
const express = require('express');
const app = express();

const blogData = require("./blogData.json");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
  const blogs = blogData.blogs;
  res.render("index", { blogs });
});

app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  const blog = blogData.blogs[id];
  res.render("blog", { blog });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
