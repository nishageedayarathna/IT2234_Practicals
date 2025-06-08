const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const getAllDocuments=require('../services/getall');
const Task=require('../models/Task');

//GET all tasks
router.get('/',async(req,res)=>{
    getAllDocuments(res,Task);
});

//Additional endpoint: GET task by ID with validation
router.get('/:taskId',async(req,res)=>{
    const {taskId}=req.params;

    //validation for taskId
    if(!mongoose.Types.ObjectId.isValid(taskId)){
            return res.status(400).json({
                success:false,
                error:'Invalid task Id format'
            });
        }

    try
    {
        const task=await Task.findById(taskId)
        .populate('assignedTo','name email')
        .populate('project','name description');

        if(!task)
        {
            return res.status(404).json({
                success:false,
                massage:'Task not found'
            });
        }

        res.status(200).json({
            success:true,
            data:task
        });
    }

    catch(err)
    {
        console.error('Error fetching task:',err);
        res.status(500).json({
            success:false,
            error:'Server error while retrieving task ',
            details:err.message
        });
    }
});

module.exports=router;