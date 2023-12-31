const mongoose = require('mongoose');

const Schema = mongoose.Schema
const RecruiterModel = new Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
});

const Recruiter = mongoose.model('Recruiter', RecruiterModel);

module.exports = Recruiter;