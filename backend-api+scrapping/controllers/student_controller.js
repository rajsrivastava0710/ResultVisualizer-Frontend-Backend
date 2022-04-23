const Student = require("../models/student")

module.exports.getAllStudentsDetail = async function(req,res) {
    let studentData = await Student.find();
    return res.status(200).json({
        data: {
            studentData: studentData
        },
        message: "Student Data Recieved",
    })
}

module.exports.getStudentDataByRollNo = async function(req,res) {
    let studentDetail = await Student.findOne({"rollNumber": req.params.id});
    return res.status(200).json({
        data: {
            studentDetail: studentDetail
        },
        message: "Single Student Detail Recieved",
    })
}

module.exports.deleteAllStudents = async function(req,res) {
    try{
		let comment = await Student.deleteMany();
            return res.status(200).json({
                message: "All Students deleted"
            });
	}catch(err){
        const errorMessage = `Error deleting students : ${err}`;
		console.log(errorMessage);
        return res.status(404).json({
            error: errorMessage
        })
	}
}
