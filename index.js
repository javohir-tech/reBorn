const user = {
    name:"Javohir",
    age:21
}

console.log(Object.entries(user))
for(let [key , val] of Object.entries(user)){
    console.log(key , val)
}