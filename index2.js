const express = require('express');

function calcuateSUm(n){
    let ans=0;
for(let i=0;i<=n;i++){
        ans+=i;
    }
    return ans;

}

const app =express();

app.get('/',(req,res) => {
    const n=req.query.n;
    const ans=calcuateSUm(n);
    //whenever sending an output make sure it is a String
    res.send(ans.toString());
})

app.listen(3500,()=>{
    console.log('server is running on port 3000')
})