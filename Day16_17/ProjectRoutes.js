const express=require('express')
const router = express.Router()
const Project = require('../models/Project')
const { mongoose } = require('mongoose')

//get project details
router.get('/', async (req,res)=>{
    try {
        const results = await Project.find()
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


//show the employee names alongwith each project

router.get('/withemployees', async (req,res)=>{
    try {
        const results = await Project.aggregate([
            {
                $lookup:{
                    from:"employees",
                    localField:"_id",
                    foreignField:'projectIds',
                    as:"employees"
                }
            },

            {
                $project:{
                    Project_id:"$_id",
                    project_name:"$name",
                    description:1,
                    deadline:1,
                    employees:{
                        $map:{
                            input:"$employees",
                            as:"emp",

                            in:{
                                employee_id:"$$emp._id",
                                employee_name:"$$emp.name",
                                position:"$$emp.position"
                            }
                        }
                    }
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