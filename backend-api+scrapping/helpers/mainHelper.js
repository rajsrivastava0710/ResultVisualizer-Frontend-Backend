const scrapper = require("../utilities/scrapper")
const Student = require("../models/student")

function populateRoll(roll,startRoll,rangeRoll){
    for(let rollNo = startRoll; rollNo < startRoll + rangeRoll; rollNo++){
        roll.push(String(rollNo))
    }
}

exports.saveBranchStudentsinDB = async function (startRoll, rangeRoll, students) {
    try {
        let roll = []
        populateRoll(roll,startRoll,rangeRoll);
        let studentData = []
        studentData = await scrapper.screenShot(roll);
        let tempStudentData = []
        for(let i=0;i<studentData.length;i++){
            let percentNumber = Number(studentData[i]['percent']);
            if(percentNumber>100 || percentNumber<=10) {
                continue;
            }
            let rollNo = studentData[i]['rollNumber'];
            studentData[i]['branch'] = getBranchFromRollNo(rollNo) 
            let exists = await Student.findOne({
                rollNumber: rollNo 
            });
            if(!exists){
                var student = await Student.create(studentData[i])
                student.save()
            }
            tempStudentData.push(studentData[i]);
        }
        students.push(tempStudentData)
    } catch(error) {
        const errorMessage = `Error while scrapping/adding data to DB : ${error}`;
		console.log(errorMessage);
    }
}

exports.getBranchCode = function(branch) {
    let code = 0;
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
    return code;
}

var getBranchFromRollNo = function(rollNo) { 
    if(rollNo.length < 5)   return "N/A";
    var branchCodeDigit = Number(rollNo[2]) % 10;
    var branch;
    switch( branchCodeDigit) {
        case 1:
            branch = "Civil"
            break;
        case 2:
            branch = "CSE"
            break;
        case 3:
            branch = "Electrical"
            break;
        case 4:
            branch = "Electronics"
            break;
        case 5:
            branch = "Mechanical"
            break;
        case 6:
            branch = "Information Technology"
            break;
        default:
            branch = "N/A"
    }
    return branch
}