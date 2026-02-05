function greeting(){
    console.log("hello")
}
console.log("Before")
setTimeout(greeting,1000)
console.log("After")


setTimeout(function(){
    console.log("Hello i am anonymous")
},2000)
console.log("After anonymous")

const div= function(a,b){
    return a*b;
}

console.log(div(4,5))