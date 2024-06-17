const express=require("express");
const app=express();

app.use(express.json());

let errCount=0;



app.get("/user",(req,res,next)=>{
    throw new Error("User not Found");
    res.status(401).json({
        name:"ERROR, USER NOT FOUND",
    })
})


//error handling middleware @ end of file
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(404).json({
        msg:"Bad Request",
    })
    errCount++;
    console.log(errCount);
})

app.listen(3004,()=>{
    console.log("server is running on port 3004")
})