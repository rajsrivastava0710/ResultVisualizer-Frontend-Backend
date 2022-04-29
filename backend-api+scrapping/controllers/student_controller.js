const mainHelper = require("../helpers/mainHelper");
const Student = require("../models/student");
const Subject = require("../models/subject");

function errorMessage(err) {
  return `Error while doing the operation : ${err}`;
}

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
    console.log(errorMessage(err));
    return res.status(404).json({
      error: errorMessage(err),
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
  } catch (error) {
    console.log(errorMessage(error));
    return res.status(404).json({
      error: errorMessage(error),
    });
  }
};

module.exports.getAllStudentsDetail = async (req, res, next) => {
  try {
    const branch = req.query.branch;
    let code = mainHelper.getBranchCode(branch);

    //TODO: We now have a field named , branchCode, so we can use that directly to search instead of using regex
    if (code > 0) {
      const regexp = new RegExp("^" + code);
      const students = await Student.find({ rollNumber: regexp }).populate({
        path: "semesterSubjects",
      });
      // .select({
      // _id: 1,
      // rollNumber: 1,
      // totalMarks: 1,
      // name: 1,
      // percent: 1,
      // branch: 1
      // });
      return res.status(200).json(students);
    } else {
      const students = await Student.find({}).populate({
        path: "semesterSubjects",
      });
      // .select({
      // _id: 1,
      // rollNumber: 1,
      // totalMarks: 1,
      // name: 1,
      // percent: 1,
      // branch: 1
      // });
      return res.status(200).json(students);
    }
  } catch (error) {
    console.log(errorMessage(error));
    return res.status(404).json({
      error: errorMessage(error),
    });
  }
};

module.exports.getStudentsWithRollNumberAndPercent = async (req, res, next) => {
  try {
    const branch = req.query.branch;
    let code = mainHelper.getBranchCode(branch);
    var students = await Student.find({ branchCode: code });
    // .select({
    // _id: 1,
    // name: 1,
    // rollNumber: 1,
    // percent: 1
    // });

    // students.forEach(student => {
    //   console.log(student)
    // })

    return res.status(200).json(students);
  } catch (error) {
    console.log(errorMessage(error));
    return res.status(404).json({
      error: errorMessage(error),
    });
  }
};
