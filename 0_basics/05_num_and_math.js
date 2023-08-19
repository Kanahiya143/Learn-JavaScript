const score = 400
console.log(score)

const num = new Number(400)
console.log(num);

console.log(num.toString().length);
console.log(num.toFixed(2));

const otherNumber = 123.456
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN')) // for Indian People

// +++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(5.6))
console.log(Math.ceil(6.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,5,6,8,2))
console.log(Math.max(4,5,6,8,2))

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)



