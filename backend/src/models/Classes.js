const mongoose = require('mongoose');

const ClassesSchema = new mongoose.Schema({
    name: String,
    description: String,
    teacher: String,
    dateAdded: Date,
    time: String,
    location: String,
    activeStatus: Boolean,
    deleted: Boolean
    });

module.exports = mongoose.model('Classes', ClassesSchema);
