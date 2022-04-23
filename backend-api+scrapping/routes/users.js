const express = require('express');

const userController = require("../controllers/user_controller")

const router = express.Router();

console.log("User Router loaded");

router.get('/',userController.profile);

module.exports = router;