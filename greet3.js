function Greetr() {
    this.greeting = 'Pattern 3';
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();