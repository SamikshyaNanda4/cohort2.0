const jwt=require("jsonwebtoken");

//decode, verify, generate

const value={
    name:"samikshya",
    accountNumber:1234567890,
}

const token=jwt.sign(value,"secret");

//jwt

console.log(token);

//the token has been generated using this secret and hence the token can be verified using this secret

//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FtaWtzaHlhIiwiYWNjb3VudE51bWJlciI6MTIzNDU2Nzg5MCwiaWF0IjoxNzE4NjEzODE2fQ.V3Sw8gFuAIP1fh8lUbogPMO9bCviZBSkCKGnIKz7jLQ
const decoded=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FtaWtzaHlhIiwiYWNjb3VudE51bWJlciI6MTIzNDU2Nzg5MCwiaWF0IjoxNzE4NjIwMjAzfQ.CwzsYcinl4cQb6hWt6tmi6Rmf3z8vX5nWhSBqd7ypZ4","secret");
console.log(decoded);


function getLength(name){
    return name.length;
}
const gg= getLength("samikshya");
console.log(gg);