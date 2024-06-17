//jwt and zod


const jwt=require("jsonwebtoken");
const jwtPassword="<PASSWORD>";
const zod=require("zod");

const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);


function signJwt(username,password){
    const usernameResponse=emailSchema.safeParse(username);
    const passwordResponse=passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    const token=jwt.sign({username},jwtPassword);
    return token;
    
}

const ans=signJwt("singhshivam@nanda.in","pass");
console.log(ans);

function deCode(answer){
    const decoded =jwt.decode(answer);
    //doesnot need any secrets
    //returns null/not null and not true or false that why we are putting only (decoded)
    if(decoded){
        return decoded;
    }else{
        return false;
    }
}

// function verifyJwt(answer){
//     const verified=jwt.verify(answer,jwtPassword);
//     if(verified){
//         return true;
//     }else{
//         return false;
//     }
// }


console.log(deCode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN3YXBuaWxleGlzdGluZ0BuYW5kYS5pbiIsImlhdCI6MTcxODYyNDQ1M30.3HKI8QtSTPPnuYOZTuFoZqW1hKDJAywL_IuOHVv-7a4"));

