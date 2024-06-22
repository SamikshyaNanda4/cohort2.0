const arr=[1,2,3,4,5,6,7,8,9,10];
// const newArr=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         newArr.push(arr[i]);
//     }
// } 
// console.log(newArr);

// function filteringLogic(n){
//     if(n%2===0){
//         return true;
//     }
//     return false;
// }

// const ans=arr.filter(filteringLogic);
// console.log(ans);

const ans=arr.filter((i)=>{
    if(i%2==0){
        return true;
    }
    return false
});
console.log(ans);


