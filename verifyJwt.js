const jwt=require("jsonwebtoken");

function verifyJwt(answer){
    //jwt.decode is not as same as jwt verify -->jwt verify panics when the input is wrong
    //so try atch is used in jwt.verify mandatorily
    //so jwt.decode is used in jwt.verify only when the jwt is not tampered

    try{
    const verified=jwt.verify(answer,"<PASSWORD>");
    //return verified only returns a boolean function but in decode it returned the decoded object
    return verified;
    }catch(e){
        return false;
    }
}

console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN3YXBuaWxleGlzdGluZ0BuYW5kYS5pbiIsImlhdCI6MTcxODYyNDQ1M30.3HKI8QtSTPPnuYOZTuFoZqW1hKDJAywL_IuOHVv-7a4"))