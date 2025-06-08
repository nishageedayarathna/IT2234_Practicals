const express=require('express')
const router = express.Router()
const Employee = require('../models/Employee')
const { mongoose } = require('mongoose')

//get employee details
router.get('/', async (req,res)=>{
    try {
        const results = await Employee.find()
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

//get project counts with employees
router.get('/procount/', async (req,res)=>{
    try {
        const results = await Employee.find()
        const newResults = results.map(emp=>({
            id:emp._id,
            name:emp.name,
            number_of_projects:emp.projectIds.length
        }))
        if (results) {
            res.status(200).json(newResults)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})

//get project names along with employee details

router.get('/withprojects/', async (req,res)=>{
    try {
        const results = await Employee.find().populate('projectIds','name').populate('departmentId','name');
        const formattedResults = results.map(emp=>({
            id:emp._id,
            name:emp.name,
            department:emp.departmentId.name,
            projects:emp.projectIds.map(projects => projects.name)
        }));
        if (results) {
            res.status(200).json(formattedResults)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
});

//get the distinct postions of employees

router.get('/positions/', async (req,res)=>{
    try {
        const results = await Employee.distinct('position')
        
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
});

//along with distinct postions, show how many employees hold that postion
// like Enigeers:2
// HR:1

router.get('/positions/count', async (req,res)=>{
    try {
        const results = await Employee.aggregate([
            {
                $group:{
                    _id:"$position",
                    count:{$sum:1}
                }
            },

            {
                $project:{
                    position:"$_id",
                    employee_count:"$count",
                    _id:0
                }
            }
           
        ]);
        
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
});

//find employees who are an engineer or software engineer

router.get('/engineers/', async (req,res)=>{
    try {
        const results = await Employee.find({
            position:{$in:['Software Engineer','Engineer']}
        }).populate('departmentId','name');
        
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
});



module.exports=router