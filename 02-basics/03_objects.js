// singleton---a type of objects created by a++++ 
// +++constructers not a object literals
// Object.create

// object literals

const mySym = Symbol("key1")  // symbol declare

//keys values are considered as strings
// declaration of object--inside curly brackets
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //square brackets--use as a symbol referring symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//acess of objects
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  symbol accessing ke liya bhi square brackets chaiya

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  //freeze ho  gya **N0 CHANGE**
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);
//Adding greetings freeze hatan padega 
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());