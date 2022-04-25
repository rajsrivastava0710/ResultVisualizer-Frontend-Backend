const mainHelper = require("../helpers/mainHelper");

module.exports.scrapperRoute1 = async function (req, res, next) {
  let students = [];

  let startRoll = 16101, rangeRoll = 10;
//   await mainHelper.saveBranchStudentsinDB(startRoll, rangeRoll, students);
//   console.log("Done 1/6");
  startRoll = 16302, rangeRoll = 1;
  await mainHelper.saveBranchStudentsinDB(startRoll, rangeRoll, students);
  console.log("Done 2/6");
//   startRoll = 16301, rangeRoll = 10;
//   await mainHelper.saveBranchStudentsinDB(startRoll, rangeRoll, students);
//   console.log("Done 3/6");
//   startRoll = 16401, rangeRoll = 10;
//   await mainHelper.saveBranchStudentsinDB(startRoll,rangeRoll, students)
//   console.log("Done 4/6")
  // startRoll = 16243, rangeRoll = 10;
  // await mainHelper.saveBranchStudentsinDB(startRoll,rangeRoll, students)
  // console.log("Done 5/6")
  // startRoll = 16601, rangeRoll = 10;
  // await mainHelper.saveBranchStudentsinDB(startRoll,rangeRoll, students)
  // console.log("Done 6/6")

  return res.status(200).json({
    data: {
      studentsData: students,
    },
    message: "Scrapping Done",
  });
};
