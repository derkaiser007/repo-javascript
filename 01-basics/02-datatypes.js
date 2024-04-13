// node 02-datatypes.js

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

let name = "hitesh"
let age = 18
let price = 12.99
let isLoggedIn = false
let state;

// number => 2^53 - 1 or 9007199254740991
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(typeof anotherId);
// console.log(id === anotherId);

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// Reference (Non primitive)
// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3