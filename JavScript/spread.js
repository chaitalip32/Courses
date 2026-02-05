// let arr1=[1,2,3]

// let arr2=[...arr1]

// arr3=[...arr1,4,5]
// console.log(arr1)
// console.log(arr2)
// console.log(arr2.length)
// console.log(arr3)

// obj={a:1,b:2,c:3}

// obj2={...obj,d:4,e:5}
// console.log(obj2)

// function sum(a,b,c,d){
//     return a+b+c+d
// }

// let numbers=[1,2,3,4]
// console.log(sum(...numbers))

function sum(...numbers){
    return numbers.reduce((acc,curr)=>acc+curr,0);
}

console.log(sum(1,2,3,4,5))

//Array destructuring

const [first,second,...rest]=[1,2,3,4,5]
console.log(rest)

const {a,b,...rest1}={a:1,b:2,c:3,d:4}
console.log(rest1)