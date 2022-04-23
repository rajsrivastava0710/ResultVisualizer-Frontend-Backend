const scrapper = require("../utilities/scrapper")
const Student = require("../models/student")

function populateRoll(roll,startRoll,rangeRoll){
    for(let rollNo = startRoll; rollNo < startRoll + rangeRoll; rollNo++){
        roll.push(String(rollNo))
    }
}

exports.saveBranchStudentsinDB = async function (startRoll, rangeRoll, students) {
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
}
