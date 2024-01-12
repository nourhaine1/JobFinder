const mongoose = require('mongoose')

// biha n7adedo kifeh nsayvoo les donnée fl base de donnée
const Schema = mongoose.Schema

const CompanyModel = new Schema({
    company_name:String,
    secteur:String,
    description:String,
    website:String,
    email:String,
    location:String,
     logo: String 
})

const Company = mongoose.model('Company', CompanyModel)

module.exports = Company