function myCar(model, color, make) {
    this.make = make;
    this.model = model;
    this.color = color
}

const obj = new myCar("nexia" , 2015 , "black");
console.log(obj.model)

console.log(obj)