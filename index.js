function user(name, age) {
    this.name = name;
    this.age = age
}

const newUser = new user("Javohir", 21);
console.log(newUser);

const car = function (model, year) {
    this.model = model;
    this.year = year;
}

const newCar = new car("nexia", 2015);

console.log(newCar)

const ArrowFunction = () => {
    console.log(this)
}

ArrowFunction()