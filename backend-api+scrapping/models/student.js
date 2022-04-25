const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	rollNumber:{
		type: String,
		required: true
	},
    name: {
        type: String,
        required: true
    },
    fatherName: {
        type: String
    },
    course:{
        type: String
    },
    branch:{
        type: String
    },
    passingYear: {
        type: String
    },
    studentType: {
        type: String
    },
    percent:{
        type: String
    },
    division:{
        type: String
    },
    totalMarks:{
        type: String
    },
    yearWiseMarks: [String],
    yearWisepassingStatus:[String],
    //Array of 8 semsters, each having objects with Subject 
    // Name as key and array of sem and practical marks as value of that key
	semsterSubjects: [[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subject'
        }
    ]],
},{
	timestamps: true
});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;