const person = {
    firstname: '',
    lastname: '',
    greet: function () {
        console.log(`Hi, ${this.firstname} ${this.lastname}`);
    }
}

// create this object(wilfried) from person (a prototype)
const wilfried = Object.create(person); // wilfried's prototype is person
wilfried.firstname = 'Wilfried';
wilfried.lastname = 'Majaliwa';
wilfried.greet();

console.log(wilfried.__proto__);
