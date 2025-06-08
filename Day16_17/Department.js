const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  _id: String,
  name: { type: String, required: true, unique: true },
  location: String
});


module.exports = mongoose.model('departments', departmentSchema);