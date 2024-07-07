const obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hey, ${this.name}!`);
    }
}

obj.greet();
obj.greet.call({
    name: 'Majaliwa'
}); // whatever is passed to call overwrites the 'this' keyword reference,
// extra params are passed as arguments, comma delimited

obj.greet.apply({
    name: 'Majaliwa'
}); // whatever is passed to apply overwrites the 'this' keyword reference,
// extra params are in an array