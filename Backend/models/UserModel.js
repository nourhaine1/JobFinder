const mongoose = require('mongoose')
const bcrypt = require('bcrypt');


// biha n7adedo kifeh nsayvoo les donnée fl base de donnée
const Schema = mongoose.Schema

const UserModel = new Schema({
    fullName:String,
    description:String,
    email:String,
    password: {
        type: String,
        required: true
    },
    status:String,
    adresse:String,
    birthday:Date,
    skills:String,
    pdf:String,
    /*  pdf: {
        data: Buffer,   // Utilisation de Buffer pour stocker les données binaires du fichier
        contentType: String,  // Stocke le type MIME du fichier (ex: 'application/pdf')
        filename: String     // Nom du fichier original
    },*/
    image:String,
    /*image: {
        data: Buffer,
        contentType: String,
        filename: String
    },*/
})



const User = mongoose.model('User', UserModel)

module.exports = User