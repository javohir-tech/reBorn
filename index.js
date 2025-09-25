const Animal = {
    type : "Default qiymat",
    print(){
        console.log(this.type)
    }
}

const obj = Object.create(Animal);
obj.print()
const obj2 = Object.create(Animal);
obj2.type = "Baliq";
obj2.print()