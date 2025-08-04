//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //false

// const bigNumber = 3456543576654356754n  ***n repersent big int



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){  // function(){}
    console.log("Hello world");
} //fuction ka type of function hi hoga

console.log(typeof anotherId);  //typeofnull ka object hoga

// https://262.ecma-international.org/5.1/#sec-11.4.3

 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //Stack (primitive)  , heap(refference or Non-Primitive)
 let myYoutubename="hiteShChoudharydotcom"

 let anothername = myYoutubename
 anothername ="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"usergoogle@gmail.com",
    upi:"user@axl"
}

let userTwo = userOne
userTwo.email="shubhamkrgupta15@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ye sab primitive hai pahle myYoutubename print hoga
// phit chaiaurcode print hoga
//referenece aur non-primitive mein original value change ho jayega...
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
