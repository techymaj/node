// const greetOne = require("./greet1");
// const greetTwo = require("./greet2");
// const greetTwoVariation = require("./greet2").greet;
// const greetThree = require("./greet3");
// const greetThreeVariation = require("./greet3");
// const GreetFour = require("./greet4"); // return a reference to a constructor
// const greetFive = require("./greet5").greet;
//
// greetOne('Majaliwa');
// greetTwo.greet();
// greetTwoVariation();
// greetThree.greet();
// greetThree.greeting = 'Hey, you! Pattern 3, huh';
// greetThreeVariation.greet(); // pass by reference
// const greeting4 = new GreetFour(); // won't be the same objects if created multiple times
// greeting4.greet();
// greetFive();
// greetFive.greeting = 'Nope!!!'; // greeting is encapsulated, won't work
// greetFive(); // still prints original greeting
const greet = require('./exportsVmodule.js');
const greetVariation = require('./exportsVmoduleVariation');
greetVariation.greet();