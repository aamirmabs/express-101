# Setting up an EJS Project

Create a new folder for your project and open it in your preferred code editor. Open the terminal and run the following command to create a new package.json file:

`npm init -y`

Next, install the dependencies needed to build our application:

`npm install express ejs --save`

Create a new file named `app.js` and add the following code:

```js
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

This sets up the basic structure of our application, including configuring the view engine as EJS and setting up a static folder for our CSS and JavaScript files.

## Creating the Blog Data

Create a new file named `blogData.json` in your project folder and add the following code:

```json
{
  "blogs": [
    {
      "title": "Blog 1 Title",
      "description": "Blog 1 Description",
      "body": "Blog 1 Body"
    },
    {
      "title": "Blog 2 Title",
      "description": "Blog 2 Description",
      "body": "Blog 2 Body"
    },
    {
      "title": "Blog 3 Title",
      "description": "Blog 3 Description",
      "body": "Blog 3 Body"
    }
  ]
}
```

This creates an array of objects, with each object representing a blog post.

## Creating the EJS Files

Create a new folder named `views` in your project directory. Inside the `views` folder, create two new files named `index.ejs` and `blog.ejs`.

### Side note on EJS plugins for VS Code

If you are using VS Code, you can install the [EJS Language Support](https://marketplace.visualstudio.com/items?itemName=QassimFarid.ejs-language-support) plugin to get syntax highlighting and code completion for EJS files.

If your editor does not have a plugin for EJS, you can still use EJS. You will just need to make sure that you are using the correct syntax.

If the formatting is not supported, you may refer to the plugin where you can find instructions on how to set up the syntax highlighting and code completion for EJS in the settings.json file.

---

In the `index.ejs` file, add the following code:

```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My Blog</title>
    </head>
    <body>
        <h1>Welcome to My Blog</h1>
        <% blogs.forEach(blog => { %>
            <h2><%= blog.title %></h2>
            <p><%= blog.description %></p>
        <% }) %>
    </body>
</html>
```

This code sets up the basic structure of our index page, including a heading and a loop to display the titles and descriptions of each blog post.

In the `blog.ejs` file, add the following code:

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= blog.title %></title>
  </head>
  <body>
    <h1><%= blog.title %></h1>
    <p><%= blog.description %></p>
    <p><%= blog.body %></p>
  </body>
</html>
```

This code sets up the basic structure of our blog page, including a heading, description, and body content.

## Creating the Routes

In the app.js file, add the following code to create the routes for our application:

```js
const blogData = require("./blogData.json");

app.get("/", (req, res) => {
  const blogs = blogData.blogs;
  res.render("index", { blogs });
});

app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  const blog = blogData.blogs[id];
  res.render("blog", { blog });
});
```

This sets up routes for the index page and the blog page. The index page will display the titles and descriptions of each blog post, and the blog page will display the title, description, and body content of a single blog post.

## Create Views with EJS

Now that we have set up our routes, it's time to create the views using EJS templates. We will create two views - `index.ejs` and `blog.ejs`.

Create a folder called `views` in your project directory. Inside the `views` folder, create a file called `index.ejs` and paste the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Blog Index</title>
  </head>
  <body>
    <h1>Blog Index</h1>
    <% blogs.forEach(function(blog) { %>
    <h2><%= blog.title %></h2>
    <p><%= blog.description %></p>
    <a href="/blog/<%= blog.id %>">Read More</a>
    <% }); %>
  </body>
</html>
```

This code will render the list of blog titles and descriptions on the `index` page.

Next, create a file called `blog.ejs` in the `views` folder and paste the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title><%= blog.title %></title>
  </head>
  <body>
    <h1><%= blog.title %></h1>
    <p><%= blog.description %></p>
    <p><%= blog.content %></p>
    <a href="/">Back to Index</a>
  </body>
</html>
```

This code will render the full blog post on the `blog` page.

## Update Routes to Render Views

Now that we have created our `views`, let's update our `routes` to render them.

In `app.js`, replace the existing `app.get` routes with the following code:

```js
app.get("/", function (req, res) {
  res.render("index", { blogs: blogs });
});

app.get("/blog/:id", function (req, res) {
  var blog = blogs.find(function (blog) {
    return blog.id === req.params.id;
  });
  res.render("blog", { blog: blog });
});
```

These routes will render the index view when the user visits the home page, and the blog view when the user clicks on a `blog` post.

## Start the Server

Finally, start the server by running the following command in your terminal:

`node app.js`

## View the Website

Visit `http://localhost:3000` in your browser to view the index page. Click on a blog post to view the full blog.

That's it! You have successfully created a website using EJS templates with Express and Node.js.

Here's the complete code for app.js. Please not that in the content of the blog is defined in the `blogData` variable:

```js
const express = require("express");
const app = express();

// Set the port number from .env file or use 3000 if not set
const PORT = process.env.PORT || 3000;

// fetching the blog data from blogData.json
// const blogData = require("./blogData.json");

// in our case, we will initialize the blogData with some dummy data
const blogData = [
  {
    id: 1,
    title: "First Blog Post",
    description: "This is the first blog post",
    body: "Blog 1 text",
  },
  {
    id: 2,
    title: "Second Blog Post",
    description: "This is the second blog post",
    body: "Blog 2 text",
  },
  {
    id: 3,
    title: "Third Blog Post",
    description: "This is the third blog post",
    body: "Blog 3 text",
  },
];

// Set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
