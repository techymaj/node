const buffer = new ArrayBuffer(8); // from v8, new es6 feature
const view = new Uint32Array(buffer);

view.set([65, 66]);
console.log(view);