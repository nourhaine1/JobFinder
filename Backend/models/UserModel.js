const mongoose=require('mongoose');
const bcrypt=require ('bcrypt');
const UserSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
        },
        description:{
            type:String,
        },
        email: {
            type:String,
        },
        password: 
        {
            type: String,
        },
        status: {
            type: String,
        },
        location: {
            type: String,
        },
        Birthday: {
            type: Date,
        },
        skills: {
            type: String,
        },
        logo: {
            type: String,
        },
        cv: {
            type: String,
        }
    },
  
)
//creation de model
// Before saving the user, hash the password
UserSchema.pre('save', async function (next) {
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


const User=mongoose.model('Users',UserSchema);
module.exports=User;