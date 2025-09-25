const fruit = {name :"apple"};
const anotherFruits = fruit;

console.log(fruit==anotherFruits)
console.log(fruit===anotherFruits)

anotherFruits.name = "grape"
console.log(anotherFruits)
console.log(fruit==anotherFruits)
console.log(fruit===anotherFruits)