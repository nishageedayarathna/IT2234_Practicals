const express=require('express')
const router = express.Router()
const Department = require('../models/Department')
const Employee = require('../models/Employee')
const { mongoose } = require('mongoose')

//get department details
router.get('/', async (req,res)=>{
    try {
        const results = await Department.find()
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})

// give a dept id and get the employees who are working there
router.get('/emp/:did', async (req,res)=>{
    try {
        const did = req.params.did
        //const results = await Employee.find({departmentId:did}).populate("departmentId")
        //display only emp id, name, department name
        const results = await Employee.find(
            {departmentId:did},
            {name:1,departmentId:1}).populate("departmentId").sort({ name:-1})
        //manipulate the results
        const filterResult=results.map(emp=>({
            employee_id:emp._id,
            employee_name:emp.name,
            department_name:emp.departmentId.name
        }))
        if (results) {
            res.status(200).json(filterResult)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})

//find how many employees are working in a department

//shows the employee count along with each deapartment details 
router.get('/empcount/', async (req,res)=>{
    try {
        const results = await Department.aggregate([
            {
                $lookup:{
                    from:"employees",
                    localField:"_id",
                    foreignField:"departmentId",
                    as:"emps"
                }
            },
            {
                $project:{
                    name:1,
                    location:1,
                    number_of_employees:{$size:"$emps"}
                }     
            }
        ])
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})
module.exports=router