const mainHelper = require("../helpers/mainHelper");
const Student = require("../models/student");
const Subject = require("../models/subject");

function errorMessage(err) {
  return `Error while doing the operation : ${err}`;
}

module.exports.getListWithRollNumberAndDivision = async (req, res, next) => {
  try {
    const branch = req.query.branch;
    let code = mainHelper.getBranchCode(branch);
    var students = await Student.find({ branchCode: code }).select({
      rollNumber: 1,
      division: 1,
    });

    var dict = {};
    var rollDivisionArray = [[String]];
    students.forEach((student) => {
      if (dict[student.division] === undefined) dict[student.division] = 1;
      else dict[student.division] += 1;
    });

    for (var division in dict) {
      rollDivisionArray.push([division, dict[division]]);
    }
    rollDivisionArray[0] = ["Roll Number", "Division"];

    return res.status(200).json(rollDivisionArray);
  } catch (error) {
    console.log(errorMessage(error));
    return res.status(404).json({
      error: errorMessage(error),
    });
  }
};

module.exports.getListWithBranchAndAveragePercent = async (req, res, next) => {
  try {
    var students = await Student.find().select({
      percent: 1,
      branch: 1,
      rollNumber: 1,
    });
    var total = 0,
      sum = 0,
      x = 0;
    var branchData = {};
    var branchStudentCount = {};
    students.forEach((student) => {
      if (!isNaN(student.percent)) {
        var payload = 0;
        if (student.percent > 40) payload = 1;
        if (branchData[student.branch] == undefined) {
          branchData[student.branch] = [
            Number(student.percent),
            Number(payload),
          ];
        } else {
          branchData[student.branch][0] += Number(student.percent);
          branchData[student.branch][1] += Number(payload);
        }
      }
      if (branchStudentCount[student.branch] == undefined) {
        branchStudentCount[student.branch] = [
          Number(1),
          Number(student.rollNumber),
          Number(student.rollNumber),
        ];
      } else {
        branchStudentCount[student.branch][0] += 1;
        branchStudentCount[student.branch][1] = Math.min(
          Number(student.rollNumber),
          branchStudentCount[student.branch][1]
        );
        branchStudentCount[student.branch][2] = Math.max(
          Number(student.rollNumber),
          branchStudentCount[student.branch][2]
        );
      }
    });

    // I have branch -> percentSum , passingStudentsCount
    // I also have total number of students
    var resArray = [[String]];
    for (var branch in branchData) {
      var avgPercent = branchData[branch][0] / branchStudentCount[branch][0];
      var passingCount = branchData[branch][1];
      var rangeString =
        String(branchStudentCount[branch][1]) +
        "-" +
        String(branchStudentCount[branch][2]);
      resArray.push([
        branch,
        Number(avgPercent),
        Number(passingCount),
        rangeString,
        Number(branchStudentCount[branch][0]),
      ]);
    }

    resArray[0] = [
      "Branch",
      "Average Percent",
      "Students Passed",
      "Branch Roll Number Range",
      "Total Students",
    ];

    return res.status(200).json(resArray);
  } catch (error) {
    console.log(errorMessage(error));
    return res.status(404).json({
      error: errorMessage(error),
    });
  }
};
