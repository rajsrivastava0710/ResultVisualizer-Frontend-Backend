const mainHelper = require("../helpers/mainHelper");
const Student = require("../models/student");
const Subject = require("../models/subject");

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
    let students = await Student.deleteMany();
    let subjects = await Subject.deleteMany();
    return res.status(200).json({
      message: "All Students deleted",
    });
  } catch (err) {
    const errorMessage = `Error deleting students/subjects : ${err}`;
    console.log(errorMessage);
    return res.status(404).json({
      error: errorMessage,
    });
  }
};

module.exports.getAllStudentsDetail = async (req, res, next) => {
  try {
    const branch = req.query.branch;
    let code = mainHelper.getBranchCode(branch)

    if (code > 0) {
      const regexp = new RegExp("^" + code);
      const students = await Student.find({ rollNumber: regexp }).select({
        _id: 1,
        rollNumber: 1,
        totalMarks: 1,
        name: 1,
        percent: 1,
        branch: 1
      });
      return res.status(200).json(students);
    } else {
      const students = await Student.find({}).select({
        _id: 1,
        rollNumber: 1,
        totalMarks: 1,
        name: 1,
        percent: 1,
        branch: 1
      });
      return res.status(200).json(students);
    }
  } catch(error) {
      const errorMessage = `Error on retrieving students : ${err}`;
      console.log(errorMessage);
      return res.status(404).json({
        error: errorMessage,
      });
  }
  
};
