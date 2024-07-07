function Greetr() {
    this.greeting = 'Pattern 4';
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = Greetr;