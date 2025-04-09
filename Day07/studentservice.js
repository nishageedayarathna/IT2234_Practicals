const students = require('./studentdb');

function getstudents() {
    return students;
}

function getStudent(id) {
    return students.find((student)=>student.regno==id)
}

function getByGender(gender) {
    return students.filter((student)=>student.gender==gender)
}

module.exports= {getstudents,getStudent,getByGender}