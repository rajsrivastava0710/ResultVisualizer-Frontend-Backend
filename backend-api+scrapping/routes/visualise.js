const express = require('express');

const visualiseController = require("../controllers/visualise_controller");

const router = express.Router();

console.log('Visualise router loaded');

router.get('/rollPercent',visualiseController.getListWithRollNumberAndDivision);

router.get('/branchBubble',visualiseController.getListWithBranchAndAveragePercent);

module.exports = router;