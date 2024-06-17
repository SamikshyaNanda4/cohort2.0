const express=require('express');
const app=express();


app.use(express.json());

app.get('/healthy-checkup', function (req, res) {
    //do health checks
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "hitesh" || password != "<PASSWORD>") {
        res.status(401).json({
            msg: "unauthorized"
        });
        return;
    }
    if (kidneyId != 1 && kidneyId !=2) {
        res.status(411).json({
            msg: "kidney id is not valid"
        });
        return;
    }
//do something wit kidney here
    res.json({msg:
        "Your kidney is healthy"}
    );
});


app.listen(3200, ()=> {
    console.log("server is running on port 3000");
});