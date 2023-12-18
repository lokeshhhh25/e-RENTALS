const mongoose=require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
// username or password by default leha passport.l.m package
//agar kuch additional lena h to le sakte hai
email:{
    type:String,
    trim:true,
    required:true
}


})

userSchema.plugin(passportLocalMongoose);

let User = mongoose.model('User', userSchema);
module.exports= User;
