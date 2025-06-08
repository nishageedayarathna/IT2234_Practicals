const express=require('express');
const app=express();
const port=3006;

const mongoose=require('mongoose');

const userrt=require('./routes/userRoute');
const projectrt=require('./routes/projectRoute');
const taskrt=require('./routes/taskRoute');

app.use(express.json())
app.use('/tasks',taskrt)
app.use('/users',userrt)
app.use('/projects',projectrt)

mongoose.connect('mongodb://localhost:27017/taskDB').then(()=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
