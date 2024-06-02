console.log("Krishna Kotgire");
require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/instagram", (req, res) => {
  res.send("krishnakotgire25");
});

app.get("/greet", (req, res) => {
  res.send("<h1>Good morning❤</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
