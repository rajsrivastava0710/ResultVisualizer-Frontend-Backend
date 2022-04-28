const express = require('express');

const homeController = require("../controllers/home_controller")

const router = express.Router();

console.log("Home Router loaded");

router.get('/', (req, res) => {
  res.send('Welcome to KNIT Result Visualiser')
})

router.get('/scrapper',homeController.scrapperRoute1);

router.use('/student',require('./student'));

router.use('/visualise',require('./visualise'));

module.exports = router;