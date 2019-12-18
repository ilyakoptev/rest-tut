const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
// middlewares

// app.use('/posts', () => {
//     console.log('This is middleware running')
// })
// mongodb+srv://rest-admin:<password>@cluster0-7lt25.mongodb.net/test?retryWrites=true&w=majority
// routes

app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
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
