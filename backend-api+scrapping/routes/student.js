const express = require('express');

const studentController = require("../controllers/student_controller");

const router = express.Router();

console.log('Student router loaded');

router.get('/',studentController.getAllStudentsDetail);

router.get('/destroy/setItOnFire',studentController.deleteAllStudents);

router.get('/:id',studentController.getStudentDataByRollNo);

module.exports = router;