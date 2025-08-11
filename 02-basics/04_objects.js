// const tinderUser = new Object()  //single turned object
const tinderUser = {}  //empty object hi milega non-single turned object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",   //nesting jo raha hai object ke unde object
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
  //combinig objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)  ++++++++++++{}-->Target and rest obj1,obj2,obj3 are the source 
// object.aggign() static method that copies (enumerable  -- object keys)
// enumerable own prop[erties from one o more source object.it return modified target object]

//const obj3 = {...obj1, ...obj2}  +++++++spreading(seperating the values)
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  ++++++Datatypes=arrays
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  +++++++puch rahe ki tinderuse mein isLoggedIn properties hai ki nhi 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  
//courseInstructer bahut bada nam hai tho pahle rename kar dete hai instructor

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//upper wlla object nhi JSON hai

//..API==aapna kaam dusre mein daalna

[
    {},
    {},
    {}
]
