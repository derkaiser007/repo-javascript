// node 02-basics/objects.js

// Singleton(Object created using Constructor)
/*1. Using Constructor Function: */
/*
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new Person("Hitesh", 25);
const person2 = new Person("John", 30);

person1.sayHello();  // Output: Hello, my name is Hitesh and I am 25 years old.
person2.sayHello();  // Output: Hello, my name is John and I am 30 years old.
*/

/*2. Using ES6 Classes (Preferred Approach)*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Hitesh", 25);
const person2 = new Person("John", 30);

// person1.sayHello();  // Output: Hello, my name is Hitesh and I am 25 years old.
// person2.sayHello();  // Output: Hello, my name is John and I am 30 years old.


/*Object.create: Object.create() is a method in JavaScript that allows you to create a new object with a 
specified prototype object and optional properties. It's a powerful tool for setting up inheritance without 
needing to use constructor functions or classes.*/
const personPrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const person3 = Object.create(personPrototype);
person3.name = "Hitesh";  // Adding a property to the new object
// person3.greet();  // Output: Hello, my name is Hitesh


const person4 = Object.create(personPrototype, {
    name: {
        value: "Hitesh",
        writable: true,
        configurable: true,
        enumerable: true
    },
    age: {
        value: 25,
        writable: false,
        configurable: true,
        enumerable: true
    }
});

// console.log(person4.name);  // Output: Hitesh
// console.log(person4.age);   // Output: 25
// person4.greet();            // Output: Hello, my name is Hitesh


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
/*Object.freeze() is a method in JavaScript that freezes an object, preventing any changes to it. Once an 
object is frozen, you cannot add, delete, or modify its properties. The object becomes immutable to any 
alterations (although shallow).*/

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

// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('id')); // true
// console.log(tinderUser.hasOwnProperty('ID')); // false

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

const obj4 = { obj1, obj2, obj3 }
const obj5 = Object.assign({}, obj1, obj2, obj3)
const obj6 = {...obj1, ...obj2, ...obj3}
// console.log(obj4); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' }, obj3: { '5': 'a', '6': 'b' } }
// console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj6); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

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