const mongoose = require('mongoose')

// biha n7adedo kifeh nsayvoo les donnée fl base de donnée
const Schema = mongoose.Schema

const ApplicationModel = new Schema({
    user_id: {
      
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      job_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
      },
      applicationDate: {
        type: Date,
        default: Date.now
      }
})

const Application = mongoose.model('Application', ApplicationModel)

module.exports = Application