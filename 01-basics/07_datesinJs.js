// Dates  arbitrary date "1st jan 1970"

let myDate = new Date()
// console.log(myDate.toString());  kafi better hai
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString()); time bhi show hoga
// console.log(typeof myDate);  object type

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); converted millsecond to second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // 0 se strt hoga isiliya +1
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

