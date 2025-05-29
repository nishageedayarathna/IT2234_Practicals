const express=require('express')
const router = express.Router()
const Student = require('../models/Student')
const Course = require('../models/Course')
const { mongoose } = require('mongoose')

router.get('/',async (req,res)=>{
    try{
        const results = await Course.find()
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
}) 


router.get('/course', async (req, res) => {
  try {
    const results = await Student.find()
      .populate('degreeId')
      .populate('enroled_courses');

    if (results && results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(404).send('Sorry, No Data Found!');
    }
  } catch (error) {
    console.error('ERROR in /Student/course route:', error);
    res.status(500).send('Server Error!');
  }
})

router.get('/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const results = await Course.findById(id)
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
})



module.exports=router