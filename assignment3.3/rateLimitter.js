//given an express server which has a few endpoints
    //task is to create a global middleware which will
    //rate limit requests from a user to only 5 requesr per second
    //if user sends more than 5 req in a single second then the server should block them with 
    // the request 404
        //user will be sending in their user id as headers as "user-id"
        // you have been given a numberOfRequestForUser object to start of with which clears every one second
const express=require("express");
const app=express();



app.use(express.json());

//clears request every every 1 seconds
let numOfRequestForUser={};
setInterval(()=>{
    numOfRequestForUser={}
},1000)

//ratelimitter

app.use((req,res,next)=>{
    const userId=req.headers["user-id"];
    if(numOfRequestForUser[userId]) {
    numOfRequestForUser[userId]++;
    if(numOfRequestForUser[userId]>5){
        res.status(404).json(
            {
            msg:"too many requests"
        }
    )
    }
    else{
        next();
    }
} else{
    numOfRequestForUser[userId]=1;
    next();
}
})

app.get("/ride1",function(req,res,next){
    res.send("You are on ride 1");
});

app.listen(3002,()=>{
    console.log("server is running on port 3002")
})
