const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    birthday: Date,
    gender: String,
    email: String,
    role: String,
    zipCode: String,
    activeStatus: { type: Boolean, default: true }, // Default value set to true
    deleted: { type: Boolean, default: false } // Default value set to false
});

module.exports = mongoose.model('User', UserSchema);
