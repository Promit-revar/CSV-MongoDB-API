const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name: String,
    gender: String,
    mob: String

});
const User=mongoose.model('users',UserSchema);
module.exports=User;