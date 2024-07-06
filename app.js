var a = 1;
var b = 2;
var c = a + b;

console.log(c);

var greet = () => {
    return "Hello World";
}

function sayHi(fn) {
    console.log(fn() + " from Wilfried");
}

sayHi(greet);

function logGreeting(fn) {
    fn();
}

logGreeting(() => console.log("logger"));
