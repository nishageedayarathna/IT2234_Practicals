const mongoose=require('mongoose');
const {Schema}=mongoose;
const taskSchema=new Schema({
    title:{type:String,required:true},
    description:{type:String},
    project:{type:Schema.Types.ObjectId,ref:'Project',required:true},
    assignedTo:{type:Schema.Types.ObjectId,ref:'User',required:true},
    dueDate:{type:Date}
});

const Task=mongoose.model('Task',taskSchema);
module.exports=Task;