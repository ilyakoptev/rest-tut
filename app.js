const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
// middlewares

//import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute); // every time i go to the post use postsRoute
// routes

app.get("/", (req, res) => {
  res.send("We are on home");
});

//connect to DB

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true
  },
  () => console.log("Connected to DB ")
);

// how to we start listening to teh server

app.listen(3000);
