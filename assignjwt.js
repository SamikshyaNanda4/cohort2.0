const express= require("express");
const jwt=require("jsonwebtoken");
const jwtPassword="123456";

const app=express();
app.use(express.json());

const ALL_USERS =[
    {
        username:"samikshyananda@gmail.com",
        password:"12345678",
        name:"Samikshya Nanda",
    },
    {
        username:"shivamkumarsingh@gmail.com",
        password:"2001110077",
        name:"Shivam Kumar Singh",
    },
    {   username:"biswasmishra@gmail.com",
        password:"20011110052",          
        name:"Biswas Mishra",

    }
];

function userExists(username, password){
    //write logic to return true of false if the user exists or not
    // in ALLUSERS array
 for(let i=0;i<ALL_USERS.length;i++){   
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
        return true;
    }
 }

}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username,password: password }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json(ALL_USERS.filter((user) => user.username!== username));
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3005 ,() => {
  console.log("server is running on port 3005");
});
