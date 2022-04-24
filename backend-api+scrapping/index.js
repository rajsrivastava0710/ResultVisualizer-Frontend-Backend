const express = require("express");
const path = require("path");
const app = express();
const puppeteer = require("puppeteer");
const db = require("./config/mongoose");
const port = 8000;
const cors = require("cors");

app.use(cors());
//EXPRESS router:
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
