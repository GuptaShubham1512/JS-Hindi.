// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
 //myArr.pop()

 // myArr.unshift(9) shift 9 to the 0th index
// myArr.shift() replace 0th index

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //slice starts from

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //original array manipulate to rest ++++ 
// IT includes the last range too ya phir last mentioned index wahi slice nhi karta hai 
console.log("C ", myArr); //splice 1st and 3rd index and output 1st and 3rd ndex
console.log(myn2);