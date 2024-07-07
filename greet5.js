const greeting = 'Pattern 5!';

function greet() {
    console.log(greeting);
}

// encapsulate greeting
module.exports = {
    greet: greet
}