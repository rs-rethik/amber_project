const mongoose = require('mongoose');

const user_schema1 = new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        lowercase:true
    },
    dob:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    Phone_number:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    img:{
        data:Buffer,
        type:String,
    }
})

const user_collection1 = new mongoose.model('users_collection1',user_schema1);
module.exports = user_collection1;