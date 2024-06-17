const arr=[1,2,3,4,5]

// const newArr=[];

// for(let i=0;i<arr.length;i++){
//     newArr.push(arr[i]*2);
// }
// console.log(newArr);


// const input=[2,4,6,8,10];

// function transform(i){
//     return i*2;
// }


// //whenever you are being told to transform arrays we use maps
// const ans=input.map(transform);//[2,4,6,8,10]
// console.log(ans);

const ans= arr.map((i)=>{
    return i*3;
})
console.log(ans);
