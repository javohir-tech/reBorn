const fruits = ["apple", "banana", "cherry"];

console.log("for...in")
for(let i in fruits){
    console.log(i , ":" , fruits[i])
}

console.log("for...of")
for(let i of fruits){
    console.log(i)
}