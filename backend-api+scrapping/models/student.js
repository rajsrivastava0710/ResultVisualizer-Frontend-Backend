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
    course:{
        type: String
    },
    branch:{
        type: String
    },
    percent:{
        type: String
    },
    totalMarks:{
        type: String
    },
    firstYearMarks:{
        type: String
    },
    secondYearMarks:{
        type: String
    },
    thirdYearMarks:{
        type: String
    },
    forthYearMarks:{
        type: String
    },
    passingStatus:[String],
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