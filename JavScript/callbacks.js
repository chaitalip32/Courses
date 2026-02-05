function greeting(name){
    console.log(`Hello ${name}`)
}

function getUserInput(callback){
    let name=prompt("Enter user name")
    callback(name)
}
getUserInput(greeting)