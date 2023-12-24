const mongoose=require('mongoose');
const bcrypt=require ('bcrypt');
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
        
  
UserModel.pre('save', async function (next) {
    try {
        // Check if the password has been modified
        if (!this.isModified('password')) {
            return next();
        }

        // Generate a salt and hash the password with the salt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);

        // Replace the plain text password with the hashed one
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});


const User=mongoose.model('Users',UserModel);
module.exports=User;