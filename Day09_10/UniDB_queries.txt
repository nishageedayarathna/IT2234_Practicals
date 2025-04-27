(01)Insert document one data set for students collection.

(02)Insert one data set using db.students.insertOne() query.
db.students.insertOne(
{
"regno": "2021IT002",
    "name": "John",
    "age": 25,
    "degree": "IT",
    "gpa": 3.3,
    "gender": "Male",
    "skills": ["JavaScript", "MongoDB", "SQL"]
})

(03)Insert data set using db.studentsMany() query.
db.students.insertMany(
[
{
    "regno": "2021IT003",
    "name": "Michael",
    "age": 24,
    "degree": "CS",
    "gpa": 3.6,
    "gender": "Male",
    "skills": ["Python", "Spring Boot", "MongoDB"]
  },
  {
    "regno": "2021IT004",
    "name": "Sophia",
    "age": 22,
    "degree": "Software Engineering",
    "gpa": 3.9,
    "gender": "Female",
    "skills": ["JavaScript", ".NET", "Azure"]
  },
  {
    "regno": "2021IT005",
    "name": "Daniel",
    "age": 26,
    "degree": "Data Science",
    "gpa": 3.7,
    "gender": "Male",
    "skills": ["Python", "TensorFlow", "SQL"]
  }
])

(03)Filter only name and age.

Project  --> {name:1,age:1,_id:0}

(04)Find the details whose regno is "2021IT001".

{regno:"2021IT001"}

shell query:
db.students.find({"regno":"2021IT001"})

(05)Find female students details.

{gender:"Female"}

shell query:
db.students.find({gender:"Female"})

(06)Find the students whose age is greater than 24.

{age:{$gt:24}}

shell query:
db.students.find({age:{$gt:24}})

(07)Find the details of students that have skills in "MongoDB".

{skills:{$in:['MongoDB']}}

shell query:
db.students.find({skills:{$in:['MongoDB']}})

(08)Find the students that have skills in "MongoDB" or "Python".

{skills:{$in:['MongoDB','Python']}}

shell query:
db.students.find({skills:{$in:['MongoDB','Python']}})

(09)Find the details of first female student.

shell query:
db.students.findOne({gender:"Female"})

(10)Sort the details by gpa ascending order.

sort --> {gpa:1}

shell query:
db.students.find().sort({gpa:1})

(11)Sort the details by gpa descending order.

sort --> {gpa:-1}

shell query:
db.students.find().sort({gpa:-1})

(12)Sort details by GPA and name in ascending order.

sort --> {gpa:1,name:1}

shell query:
db.students.find().sort({gpa:1,name:1})

(13)Sort by gpa ascending order who are stydying "IT" as degree.

query --> {degree:"IT"}
sort--> {gpa:1}

shell query:
db.students.find({degree:"IT"}).sort({gpa:1})

(14)Sort by gpa ascending order who are stydying "IT" as the degree and gender is "Male".

query --> {degree:"IT",gender:"Male"}
sort--> {gpa:1}

shell query:
db.students.find({degree:"IT",gender:"Male"}).sort({gpa:1})
