// pass by value

function change(b) {
    b = 2
}

let a = 1;

change(a)

console.log(a)

function changeObj(d) {
    d.prop1 = function() {}
    d.prop2 = {}
}

let c = {}
c.prop1 = {}
changeObj(c)
console.log(c)