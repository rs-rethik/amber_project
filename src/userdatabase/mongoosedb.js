const mongoose = require('mongoose')
const user_collection1 = require('./userdata')
mongoose.connect('mongodb://0.0.0.0:27017/userdata')
.then(()=>{console.log('Mongoose connection successful')})
.catch((err)=>{console.log(err)})

