const mongoose=require("mongoose");
const express=require("express");
const app=express();
app.use(express.json());


//assuming people are not going to use each other email as same kind of information can already exist we are doing this project only for learning purpose
mongoose.connect("mongodb://localhost:27017",);

const User=mongoose.model('Users',{name:String, email:String,
    password:String,
});

app.post('/signup',async (req,res)=> {
const username=req.body.username;
const password=req.body.password;
const email=req.body.email;
//CRUD  =create, read, update, delete
//read is .findOne()
const existingUser=await User.findOne({email:email});

if (existingUser){
    return res.status(400).json({
        msg:'Email already exists'
    })
}

    const user=new User({name:username,email:email,password:password});
    //create is .save()
    user.save().then(()=>console.log('User created'));
    res.json({
        msg:'User created Successfully'
    })
})

app.listen(3006,()=>{
    console.log("server is running on port 3006")
})


