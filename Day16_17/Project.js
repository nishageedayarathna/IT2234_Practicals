const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
  _id: String,
  name: { type: String, required: true },
  description: String,
  deadline: Date
});
module.exports = mongoose.model('projects', projectSchema);