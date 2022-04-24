const express = require("express");
const path = require("path");
const app = express();
const puppeteer = require("puppeteer");
const db = require("./config/mongoose");
const port = 8000;

//EXPRESS router:
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
