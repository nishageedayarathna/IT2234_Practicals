
const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  _id: String,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: String,
  departmentId: {
    type: String,
    ref: 'departments',
    required: true
  },
  projectIds: [{
    type: String,
    ref: 'projects'
  }]
});

module.exports = mongoose.model('employees', employeeSchema);
