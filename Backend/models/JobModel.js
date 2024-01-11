const mongoose = require('mongoose')

// biha n7adedo kifeh nsayvoo les donnée fl base de donnée
const Schema = mongoose.Schema

const JobModel = new Schema({
    job_name:String,
	society_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
      },

      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    category:String,
    job_description:String,
	skills:String,
	Experiences_Education:String,
	Location:String,
	job_type:String,
	salaire :Number,
	posted_date: {
        type: Date,
        default: Date.now  // Utilise la fonction Date.now pour obtenir la date actuelle par défaut
    },
    application_date: Date,
	vacancy:Number,
})

const Job = mongoose.model('Job', JobModel)

module.exports = Job