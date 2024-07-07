// object properties and methods

const obj = {
    greet: 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);

let prop = 'greet';
console.log(obj[prop]);

// functions and arrays
let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(function() {
    console.log('Did you call me?');
})
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(typeof arr[i]);
    if (typeof arr[i] === 'function') {
        arr[i].apply();
    }
}

console.log('----------------------')

arr.forEach(el => {
    console.log(el);
    if (typeof el === 'function') {
        el();
    }
});