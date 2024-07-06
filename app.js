function Person(lastname, firstname) {
    this.lastname = lastname // this is an empty object when a new Person is created
    this.firstname = firstname
}

Person.prototype.greet = function() {
    return `Heya ${this.lastname}`
}

var wilfried = new Person('Majaliwa', 'Wilfried')
// console.log(wilfried.lastname)
console.log(wilfried.greet())

var maria = new Person('Nansikombi', 'Maria')
// console.log(wilfried.lastname)
console.log(maria.greet())