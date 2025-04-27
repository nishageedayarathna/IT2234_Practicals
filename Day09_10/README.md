# Database Name : UniDB

# Collection Name : students

(01)Insert document one data set for students collection.

<img width="452" alt="1_Insertion" src="https://github.com/user-attachments/assets/35aee5c3-b75a-4db5-bad7-2f28ed7714b1" />

(02)Insert one data set using db.students.insertOne() query.

<img width="730" alt="2_InsertOne" src="https://github.com/user-attachments/assets/4542de27-d9b8-48ec-ad5c-2c3995f7451e" />

(03)Insert data set using db.studentsMany() query.

<img width="730" alt="3_InsertMany_1" src="https://github.com/user-attachments/assets/9d111738-10d9-4191-ac8f-7fc5ebc0613b" />

<img width="730" alt="4_InsertMany_2" src="https://github.com/user-attachments/assets/1c3b63cd-39b3-4371-ab57-e08cf03c6749" />

# Updated Data collection.

<img width="705" alt="5_Updated_1" src="https://github.com/user-attachments/assets/541beb83-5bcc-4757-8251-0987c6eb0568" />

<img width="699" alt="5_Updated_2" src="https://github.com/user-attachments/assets/a444bb4b-309d-4226-a510-da0bae80f1eb" />

<img width="702" alt="5_Updated_3" src="https://github.com/user-attachments/assets/f7a5b43e-b744-4103-b3a4-790cd398fe4f" />

# db.students.find()

<img width="730" alt="4_find_1" src="https://github.com/user-attachments/assets/469b972f-50f0-44cc-879a-31ccfed3473c" />

<img width="729" alt="4_find_2" src="https://github.com/user-attachments/assets/c217ec34-6e52-4ba5-8721-873648a8b8c9" />

<img width="730" alt="4_find_3" src="https://github.com/user-attachments/assets/3bdf38db-99c6-43ad-b603-b2fc47f93bcc" />

(03)Filter only name and age.

Project  --> {name:1,age:1,_id:0}

<img width="701" alt="6_find_1" src="https://github.com/user-attachments/assets/3e3c3902-bf52-4475-85f8-e5ad53653864" />

<img width="704" alt="6_find_2" src="https://github.com/user-attachments/assets/8d9fa751-2ac9-4f5d-b871-cbe574208811" />

(04)Find the details whose regno is "2021IT001".

{regno:"2021IT001"}

<img width="701" alt="7_findregno" src="https://github.com/user-attachments/assets/02ebcddc-6b93-4373-8d33-baba6695fd48" />

shell query:

db.students.find({"regno":"2021IT001"})

<img width="730" alt="7_findregnoshell" src="https://github.com/user-attachments/assets/34c95150-4257-4125-a8bc-bf69ddecd046" />

(05)Find female students details.

{gender:"Female"}

<img width="710" alt="8_findFemale" src="https://github.com/user-attachments/assets/709cff79-5a83-4234-b486-52cb4c24bc0c" />

shell query:

db.students.find({gender:"Female"})

<img width="729" alt="8_findFemaleShell" src="https://github.com/user-attachments/assets/cf553985-ff99-40ce-b93c-727987e5b121" />

(06)Find the students whose age is greater than 24.

{age:{$gt:24}}

<img width="704" alt="9_ageGreater" src="https://github.com/user-attachments/assets/63f77331-daa2-48ee-a59d-afeb63f46b32" />

shell query:

db.students.find({age:{$gt:24}})

<img width="730" alt="9_ageGreaterShell" src="https://github.com/user-attachments/assets/63a2ff28-e8a4-4f29-8e99-7ba1a4d7bd11" />

(07)Find the details of students that have skills in "MongoDB".

{skills:{$in:['MongoDB']}}

<img width="693" alt="10_skills" src="https://github.com/user-attachments/assets/80efce1d-7326-4d74-8b5d-608f83f46d3d" />

shell query:

db.students.find({skills:{$in:['MongoDB']}})

<img width="730" alt="10_skillsShell_1" src="https://github.com/user-attachments/assets/474ab1b0-195f-4abd-8854-42ec41c3ee7e" />

<img width="729" alt="10_skillsShell_2" src="https://github.com/user-attachments/assets/26358382-239f-4231-ad77-85eea5570c20" />

(08)Find the students that have skills in "MongoDB" or "Python".

{skills:{$in:['MongoDB','Python']}}

<img width="704" alt="11_javaOrMongo" src="https://github.com/user-attachments/assets/2ba6630b-a042-47e1-92ff-462e008693a9" />

<img width="704" alt="11_PythonOrMongo" src="https://github.com/user-attachments/assets/2ad6f733-366b-4a9a-8ab7-7f2d69f0f3de" />

shell query:

db.students.find({skills:{$in:['MongoDB','Python']}})

<img width="730" alt="11_shell_1" src="https://github.com/user-attachments/assets/9df538b3-0aaa-40d9-9310-2dc959645e46" />

<img width="730" alt="11_shell_2" src="https://github.com/user-attachments/assets/ab626509-ff3a-476e-ae93-b82d2e66ca55" />

<img width="729" alt="11_shell_3" src="https://github.com/user-attachments/assets/27129a35-3981-4cbb-b96d-d7606dd2cbbe" />

(09)Find the details of first female student.

shell query:

db.students.findOne({gender:"Female"})

<img width="730" alt="12_findOnefemale" src="https://github.com/user-attachments/assets/c5fbf192-4644-48ab-bcb6-19f0a639e10c" />

(10)Sort the details by gpa ascending order.

sort --> {gpa:1}

<img width="703" alt="13_sortGPA" src="https://github.com/user-attachments/assets/67abef64-aa91-4a09-a310-76009e98b113" />

<img width="706" alt="13_sortGPA_2" src="https://github.com/user-attachments/assets/4a674847-6512-497e-96b7-06f3a3a57817" />

<img width="701" alt="13_sortGPA_3" src="https://github.com/user-attachments/assets/fd7e85aa-b844-467c-ae17-c16a487d2848" />

shell query:

db.students.find().sort({gpa:1})

<img width="728" alt="13_shell_1" src="https://github.com/user-attachments/assets/f7e4d6f5-ef1f-4342-b7aa-cb6c0d0df80e" />

<img width="731" alt="13_shell_2" src="https://github.com/user-attachments/assets/e3a81f86-7502-4efd-8023-c3cd2a0e49c1" />

<img width="730" alt="13_shell_3" src="https://github.com/user-attachments/assets/25c6c3cb-ed07-4a0e-a000-c716309422bb" />

(11)Sort the details by gpa descending order.

sort --> {gpa:-1}

<img width="703" alt="14_GPAdesc_1" src="https://github.com/user-attachments/assets/f2d5ff66-0655-40a7-9cd5-f2e9d7ceb553" />

<img width="703" alt="14_GPAdesc_2" src="https://github.com/user-attachments/assets/3d36a9bf-8af6-4019-8173-72cc4fe6b873" />

<img width="702" alt="14_GPAdesc_3" src="https://github.com/user-attachments/assets/07e66628-1389-47d8-800d-2419cba47af5" />

shell query:

db.students.find().sort({gpa:-1})

<img width="730" alt="14_shell_1" src="https://github.com/user-attachments/assets/acbda0c3-e6c2-4f78-afaa-a2ce29dadf79" />

<img width="730" alt="14_shell_2" src="https://github.com/user-attachments/assets/e898e2b9-ef18-4bc9-8f21-950251ffd265" />

<img width="730" alt="14_shell_3" src="https://github.com/user-attachments/assets/8ffbbd68-16bc-414a-ad40-a7fa37995900" />

(12)Sort details by GPA and name in ascending order.

sort --> {gpa:1,name:1}

<img width="703" alt="15_sortNameGPA" src="https://github.com/user-attachments/assets/8ef4efb8-2d29-4be3-95db-1aa175a54deb" />

<img width="701" alt="15_sortNameGPA_1" src="https://github.com/user-attachments/assets/c43cb4da-f9d8-480e-b880-46e293878bef" />

shell query:

db.students.find().sort({gpa:1,name:1})

<img width="729" alt="15_shell_1" src="https://github.com/user-attachments/assets/8cf4f6c5-42a2-4d3b-9e71-1041bff80af1" />

<img width="729" alt="15_shell_2" src="https://github.com/user-attachments/assets/eeb1c95c-fddd-4eb9-9e06-93a250124745" />

<img width="730" alt="15_shell_3" src="https://github.com/user-attachments/assets/44eba350-a80f-4199-a040-a77453a4c3da" />

(13)Sort by gpa ascending order who are stydying "IT" as degree.

query --> {degree:"IT"}

sort--> {gpa:1}

<img width="710" alt="16_degreeIT" src="https://github.com/user-attachments/assets/a026fa9f-2272-4892-9e06-0fe643b2f5a9" />

shell query:

db.students.find({degree:"IT"}).sort({gpa:1})

<img width="730" alt="16_shell_1" src="https://github.com/user-attachments/assets/e9f97ec8-ec7a-4526-8e30-9fdb9cc377ce" />

(14)Sort by gpa ascending order who are stydying "IT" as the degree and gender is "Male".

query --> {degree:"IT",gender:"Male"}

sort--> {gpa:1}

<img width="704" alt="17_degreeMale" src="https://github.com/user-attachments/assets/397831af-affe-4e2f-ad9e-be3edea51403" />

shell query:

db.students.find({degree:"IT",gender:"Male"}).sort({gpa:1})

<img width="729" alt="17_shell" src="https://github.com/user-attachments/assets/165f84c0-e8e4-41d4-9fa8-81e085256727" />
