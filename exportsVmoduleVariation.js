exports.greet = function () {
    console.log("Mutated, hence reference kept intact");
}

console.log(exports);
console.log(module.exports);