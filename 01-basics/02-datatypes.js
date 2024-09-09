// node 01-basics/02-datatypes.js

"use strict"; // treat all JS code as newer version

// alert(3 + 3) // we are using nodejs, not browser

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
console.log(typeof anotherId);
console.log(id === anotherId); //false

/*Symbol('123') creates a unique symbol with the description '123'.
The description ('123') is just a label for debugging purposes and does not affect the identity of the symbols.
Even if you pass the same description, every Symbol() call generates a unique and immutable symbol.
Even though both id and anotherId have the same description ('123'), they are completely unique and will not be 
equal.*/

console.log(typeof undefined); // undefined
console.log(typeof null); // object

/*Why is null considered an "object"?

This is actually a well-known bug in JavaScript that dates back to the initial implementation of the language. 
When null was first introduced, its internal representation in the engine was as a null pointer, which was 
classified under the same internal type tag as objects (i.e., 0), leading typeof null to return "object".

The typeof operator returns "object" when applied to null, but this is technically a mistake.

Despite this behavior, null is not an object. It is its own primitive type representing the intentional absence 
of any object value.*/

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