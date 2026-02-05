let sum1=function(a,b){
    return a+b
}

let sum2=(a,b)=>{
    return a+b
}
let square=a=> a*a;

console.log(sum1(3,4))
console.log(sum2(3,4))
console.log(square(3))

// let val=fetchData(function(data){
//     "Received: "+data
// })

// // fetchData(data=>console.log("Received: "+data))

// fetchData(3)


function fetchData(callback){
    let data="hello"
    return callback(data)
}

let val=fetchData(data=>console.log("Received: "+data))