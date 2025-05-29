const express=require('express')
const router=express.Router()
const Students=require('../models/Students')
const {mongoose}= require('mongoose');


router.get('/',async(req,res)=>{
    try{
        const results=await Students.find().populate('degreeId')
        if(results){
            res.status(200).json(results)
        }

        else{
            res.status(404).send("Sorry,No data found!")
        }
    }

    catch(error){
        console.error(error);
        res.status(500).send("Server Error!")

    }
})

module.exports=router 