const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true,
        unique: true
	},
    rollNo:{
        type: String,
        required: true
    },
	writtenMax:{
		type: String
	},
	writtenObtained:{
        type: String
    },
    sessionalMax:{
        type: String
    },
    sessionalObtained:{
        type: String
    }
});

const Subject = mongoose.model('Subject',subjectSchema);

module.exports = Subject;