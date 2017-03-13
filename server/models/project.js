const mongoose = require('mongoose'),
	  Schema   = mongoose.Schema;




//================================
// Project Schema
//================================

const ProjectSchema = new Schema({

	name : {
		type : String,
		required : true
	},
	description : {
		type : String,
		required : true
	},
	image : {
		data : String,
		contentType : String
	}
});


module.exports =  mongoose.model('Project', ProjectSchema)