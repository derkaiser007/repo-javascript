// node objects.js

// Singleton(Object created using Constructor)
// Object.create

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greetingOne = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// JsUser.greetingOne()
// console.log(JsUser.greetingOne());
// JsUser.greetingTwo()
// console.log(JsUser.greetingTwo());

// console.log(JsUser)

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));
// console.log(tinderUser.hasOwnProperty('ID'));

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj4)
// const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        id: 156743,
        email: "a@gmail.com"
    },
    {
        id: 198765,
        email: "b@gmail.com"
    },
    {
        id: 129879,
        email: "c@gmail.com"
    },
]

// console.log(users)
// console.log(users[1])
// console.log(users[1].email)

const course =  {
        "name": "hitesh",
        "coursename": "js in hindi",
        "price": "free"
    }

// console.log(course.coursename);

// const {coursename} = course
// console.log(coursename);

// const {coursename: courseSub} = course
// console.log(courseSub);