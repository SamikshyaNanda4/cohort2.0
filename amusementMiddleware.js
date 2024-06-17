const express=require("express");
const app=express();

app.use(express.json());

function isOldEnough(req,res,next){
    const age=req.query.age;
    if(age>18){
        next();
    }else{
        res.status(403).json({
            msg:"Sorry, you are not 18 years old yet"
        })
    }
}

function ticketChecker(req, res, next){
    const ticket=req.query.ticket;
    if(ticket==="freefall"){
        next();
    }else{
        res.status(403).json({
            msg:"you are not allowed to visit this page"
        })
    }
}
//use this as first parameter before any route if it needs to go on every route
// app.use(isOldEnough);
// app.use(ticketChecker);

app.get("/ride1",function(req,res){
    res.send("You are on ride 1");
});

app.get("/ride2",function(req,res){
    res.send("You are on ride 2");
});

app.get("/ride3", function(req,res){
    res.send("You are on ride 3")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
}
)
