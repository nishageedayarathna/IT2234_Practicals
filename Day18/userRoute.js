const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const getAllDocuments=require('../services/getall');
const User=require('../models/User');

//GET all users
router.get('/',async(req,res)=>{
    getAllDocuments(res,User);
});

module.exports=router;