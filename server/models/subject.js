const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true,
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
    },
    back: {
        type: String,
        default: "-"
    }
});

const Subject = mongoose.model('Subject',subjectSchema);

module.exports = Subject;