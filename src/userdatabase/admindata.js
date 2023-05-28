const mongoose = require('mongoose');

const admin_schema1 = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true
    },
    phone:{
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
    }
})

const admin_collection1 = new mongoose.model('admins_collection1',admin_schema1);
module.exports = admin_collection1;