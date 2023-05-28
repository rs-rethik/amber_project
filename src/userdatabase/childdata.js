const mongoose = require('mongoose');

const child_schema1 = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    age:{
        type:String,
        required:true,
    },
    place:{
        type:String,
        required:true,
    },
    missing_from:{
        type:String,
        required:true,
        unique:true,
    },
    id:{
        type:String,
        required:true,
        unique:true,
    },
    img:{
        data:Buffer,
        type:String,
    }
})

const child_collection1 = new mongoose.model('child_collection1',child_schema1);
module.exports = child_collection1;