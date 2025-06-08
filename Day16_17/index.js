const express = require('express');
const app =express();
const port=3001;
const mongoose = require('mongoose')

const deptrt= require('./routes/DepartmentRoute')
const projectrt= require('./routes/ProjectRoutes')
const emprt= require('./routes/EmployeeRoute')

app.use(express.json())
app.use('/dept',deptrt)
app.use('/project',projectrt)
app.use('/emp',emprt)


mongoose.connect('mongodb://localhost:27017/employeeDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);   
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})