 const express=require('express');
 const app=express();
 

 
 const users=[
  {
    name: "Hitesh Choudury",
    kidneys:[
      {healthy:false},
    ]
  },
] ;
//filter in js has to be learned to make it lss verbose
app.get('/' ,(req,res)=>{
   const johnKidneys= users[0].kidneys;
   const numberOfKidneys = johnKidneys.length;
   console.log(johnKidneys);
   console.log(numberOfKidneys);
   let numberOfHealthyKidneys=0;
   for (let i = 0; i < johnKidneys.length; i++) {
    if(johnKidneys[i].healthy){
        numberOfHealthyKidneys++;
    }
    
   }
   const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
   res.json({
    numberOfKidneys,
   numberOfHealthyKidneys,
   numberOfUnhealthyKidneys
   })
   }

)

app.post('/',(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
      healthy:isHealthy
    })
    res.json({
      message:"kidney added"
    })
    
}) 

app.put("/",(req,res)=>{
  if(isThereAtLeastOneUnhealthyKidney()){
    for(let i=0;i<users[0].kidneys.length;i++){
      users[0].kidneys[i].healthy=true;
  }
  res.json({update:"updated all the kidneys to healthy"});
} else{
  res.status(411).json({message:"there are no unhealthy kidneys to update"});;
}
})
  
   
    

  app.delete("/",(req,res)=>{
    if(isThereAtLeastOneUnhealthyKidney()){
      const newKidneys=[];
  for(i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy==true){
      newKidneys.push(
        {healthy:true}
      )
    }
  }
  users[0].kidneys=newKidneys;
  res.json({delete:"deleted all the unhealthy kidneys"});
    }
    else{
      res.status(411).json({message:"there are no unhealthy kidneys to delete"});;
    }
  
})

function isThereAtLeastOneUnhealthyKidney(){
  let atleastOneUnhealthyKidney =false;
    for(let i=0;i<users[0].kidneys.length;i++){
      if(!users[0].kidneys[i].healthy){
        atleastOneUnhealthyKidney=true;
        break;
      }
    }
    return atleastOneUnhealthyKidney;
}

    


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})
