const mainHelper = require("../helpers/mainHelper");
const Student = require("../models/student");
const Subject = require("../models/subject");

function errorMessage(err) {
  return `Error while doing the operation : ${err}`;
}

module.exports.getListWithRollNumberAndDivision = async (req, res, next) => {
    try {
      const branch = req.query.branch;
      let code = mainHelper.getBranchCode(branch)
      var students = await Student.find()
      .select({
        rollNumber: 1,
        division: 1
      });
      
      var dict = {}
      var rollDivisionArray = [[String]]
      students.forEach(student => {
        // let tempArray = [student.rollNumber,student.division]
        // rollDivisionArray.push(tempArray)
        if(dict["division"] === undefined)  dict["division"] = 1;
        else dict[student.division] += 1
      })

      for (var division in dict){
        rollDivisionArray.push([division,dict["division"]])
      }
      rollDivisionArray[0] = ["Roll Number", "Division"]
      
      return res.status(200).json(rollDivisionArray)      
  
    } catch(error) {
        console.log(errorMessage(error));
        return res.status(404).json({
          error: errorMessage(error),
        });
    }
  };
    
  