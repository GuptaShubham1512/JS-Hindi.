const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  give precision value 

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));   starting ka 4 value mein precise hoga 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  indian value 10,00,000

// +++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);  {} with many properties
// console.log(Math.Pi);
// console.log(Math.abs(-4));  neg-->pos
// console.log(Math.round(4.6));  roundoff 5
// console.log(Math.ceil(4.2));  topValue rounoff 5
// console.log(Math.floor(4.9));  floorValue roundoff 4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);  //taki 0. kuch nan mile 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)