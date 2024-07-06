var person = {
    firstName: 'Wilfried',
    lastName: 'Majaliwa',
    greet: function() {
        return  `Hello ${this.firstName} ${this.lastName}!`
    }
}

var nameIs = person.greet()
console.log(nameIs)

var iAm = person['greet'] // storing a reference to the greet function
var boundIAm = person['greet'].bind(person)
console.log(boundIAm())