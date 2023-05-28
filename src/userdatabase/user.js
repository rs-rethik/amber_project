const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  password: { type: String, required: true },
});

const user = mongoose.model('users_collection1', userSchema);

module.exports = user;
