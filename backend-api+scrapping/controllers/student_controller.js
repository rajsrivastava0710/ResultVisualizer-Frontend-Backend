const Student = require("../models/student");

// module.exports.getAllStudentsDetail = async function (req, res) {
//   try {
//     let studentData = await Student.find();
//     return res.status(200).json({
//       data: {
//         studentData: studentData,
//       },
//       message: "Student Data Recieved",
//     });
//   } catch (err) {
//     const errorMessage = `Error on retrieving students : ${err}`;
//     console.log(errorMessage);
//     return res.status(404).json({
//       error: errorMessage,
//     });
//   }
// };

module.exports.getStudentDataByRollNo = async function (req, res) {
  try {
    let studentDetail = await Student.findOne({ rollNumber: req.params.id });
    return res.status(200).json({
      data: {
        studentDetail: studentDetail,
      },
      message: "Single Student Detail Recieved",
    });
  } catch (err) {
    const errorMessage = `Error on retrieving student : ${err}`;
    console.log(errorMessage);
    return res.status(404).json({
      error: errorMessage,
    });
  }
};

module.exports.deleteAllStudents = async function (req, res) {
  try {
    let comment = await Student.deleteMany();
    return res.status(200).json({
      message: "All Students deleted",
    });
  } catch (err) {
    const errorMessage = `Error deleting students : ${err}`;
    console.log(errorMessage);
    return res.status(404).json({
      error: errorMessage,
    });
  }
};

module.exports.getAllStudentsDetail = async (req, res, next) => {
  const branch = req.query.branch;
  let code;
  if (branch === "Civil") {
    code = 161;
  } else if (branch === "Computer Science") {
    code = 162;
  } else if (branch === "Electrical") {
    code = 163;
  } else if (branch === "Electronics") {
    code = 164;
  } else if (branch === "Mechanical") {
    code = 165;
  } else if (branch === "Information Technology") {
    code = 166;
  }
  if (code) {
    const regexp = new RegExp("^" + code);
    const students = await Student.find({ rollNumber: regexp }).select({
      _id: 1,
      rollNumber: 1,
      totalMarks: 1,
    });
    return res.status(200).json(students);
  } else {
    const students = await Student.find({}).select({
      _id: 1,
      rollNumber: 1,
      totalMarks: 1,
    });
    return res.status(200).json(students);
  }
};
