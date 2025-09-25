const person = {
    name: "Javohir",
    firstName: "Suvonov",
    get fullName() {
        return this.name + " " + this.firstName;
    },
    set update(value) {
        const arr = value.split(" ");
        this.name = arr[0];
        this.firstName = arr[1]
    }
}

console.log(person.fullName);
person.update =  "Ulug'bek Suvonov";
console.log(person.fullName);
console.log(person)