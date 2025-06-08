const errorHandler=(err,req,res,next)=>{
    const statusCode=err.statusCode || 500
    res.status(statusCode).json({
        success:false,
        code:statusCode,
        message:err.message || "Internal Server Error"
    })
    next()
}
module.exports=errorHandler