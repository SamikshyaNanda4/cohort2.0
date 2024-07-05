const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic\

    const username = req.body.username;
    const password = req.body.password;
   
    User.create({
        username,
        password
    })
    .then(function(){
        res.json({message:"User Created"})
    })
    .catch(function(){
        res.json({message:"Could not create user"})
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic\
    Course.find({})
    .then(function(value){
        res.json({courses:value}
    )})
    .catch(function(err){
        res.json({message:"Could not fetch courses"})
    })

});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId= req.params.courseId;

    const username = req.headers.username;
    User.updateOne({
        username:username
    },{
       "$push":{
        purchasedCourses:courseId
       }
    })
    .then(function(){
        res.json({message:"Course Purchased"})
    })
    .catch(function(){
        res.json({message:"Could not purchase course,user doesnot exist "})
    })
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

        const user = await User.findOne({
            username: req.headers.username
        });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router