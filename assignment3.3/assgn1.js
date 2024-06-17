const express=require('express');
const app=express();

app.use(express.json());

let requestCount=0;

function GlobalMiddleware(req,res,next){
    requestCount++;
    next();
}

app.use(GlobalMiddleware);

app.get("/user",(req,res)=>{
 res.status(200).json({
    name:"Samikshya Nanda",
 })
})

app.get("/reqCount",(req,res)=>{
    res.status(200).json({
        requestCount,
    })
})

app.listen(3001,()=>{
    console.log("server is running on port 3001")
})
