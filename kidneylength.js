

const express = require("express");
const zod =require("zod");
const app = express();

const schema=zod.array(zod.number());

// {
//     email:string=>email.includes("@")
//     password:string=>password.length>8
//     coutry:string="IN", "US"
// }

const schema2=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
    country:zod.literal("IN","US")
})

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    const kidney = req.body.kidney;
    const response=schema.safeParse(kidney);
    const kidneyLength = kidney.length;
    if (!response.success){
  res.status(400).json({
            msg: "input is not valid"
        })
    } else{
    res.send({
        response
    });
}
});

//global cathes---another middleware that improvises error handling(before zod)

app.use(function (err, req, res, next) {
    // const error = new Error("Not Found");
    // error.status = 404;
    // next(error);
    res.json({
        msg: "Sorry something is up with our servers"
    });
});

app.listen(3006, () => {
    console.log("server is running on port 3006")
}
)