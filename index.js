demo()
function demo() {
    console.log("salom")
    // console.log(this)
}


let newFunction = function () {
    console.log("function expretion")
}

newFunction()


const User = (name , age) => {
    this.name = name;
    this.age = age
}

const newUser = new User("javohir" , 21)

console.log(newUser)// error