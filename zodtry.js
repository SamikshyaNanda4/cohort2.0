const zod=require("zod");
//create a schema and validate and input hat schema
// //if this is an array of numbers with atleast 1 input, return true, ele return false
const express = require("express");
const app = express();

function validateInput(arr){

    const schema=zod.array(zod.number());

const response=schema.safeParse(arr);
console.log(response);
 
}

validateInput([1,2,3,4]); 


function validateInp(obj){
    //for some reason z. is not working so i am writing zod.
    //email(contains @), password(8)
const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8).max(20)
});

const response=schema.safeParse(obj);
console.log(response);

}

validateInp({
    email:"Samikshya.nanda.4848@gmail.com",
    password:"jia"
})

app.post ("/login", function(req, res){
    const response=validateInp(res.body)

    if(!response.success){
        msg:"inputs are invalid";
    }
})

