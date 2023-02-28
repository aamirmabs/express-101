# Steps to install and run an `express` server

1. `npm init`
2. `npm i express`
3. create index.js
4. create the following code in index.js

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("running on port 3000...");
});
```

5. run the server with `node index.js`
