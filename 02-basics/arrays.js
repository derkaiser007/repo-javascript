// node 02-basics/arrays.js

// Shallow Copy
// Deep Copy

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4) // creates [1, 2, 3, 4, 5]
const myArr3 = new Array(5);  // Creates an empty array with length 5 (but no elements)
// console.log(myArr3);  // Outputs: [ <5 empty items> ]

// console.log(myArr[1]);

// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr1 = myArr.join()
const newArr2 = myArr.join('')
const newArr3 = myArr.join(' ')
const newArr4 = myArr.join('-')
const newArr5 = myArr.join('x')
// console.log(myArr);
// console.log(newArr1);
// console.log(newArr2);
// console.log(newArr3);
// console.log(newArr4);
// console.log(newArr5);

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
// console.log(myn1);

// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

marvel_heros.pop()

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

// console.log(Array.isArray("Hitesh")) // false
// console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "hitesh"})) // []

/*
Array.isArray() is a method used to determine whether the passed value is an array.
Array.from() is a method that creates a new array from an iterable object or something that has a length 
property (like an array-like object).
The object {name: "hitesh"} is not iterable and doesn't have a length property, so Array.from() will return 
an empty array.
*/

/*In JavaScript, when dealing with arrays (or objects), there are two primary types of copying: shallow copy 
and deep copy. These terms refer to how nested elements (like objects or arrays inside arrays) are copied.*/

/*1. Shallow Copy:
A shallow copy of an array creates a new array, but the elements inside the array (especially objects or other 
arrays) are still references to the original elements. So, if you modify a nested object or array in the copied 
array, the changes will also be reflected in the original array.*/

const originalArray1 = [{ name: "John" }, { name: "Doe" }];
const shallowCopy = originalArray1.slice();  // or [...originalArray]
shallowCopy[0].name = "Jane";  // Modify the object in the copied array
console.log(originalArray1[0].name);  // Output: "Jane" (because it's a shallow copy)

/*Here, both shallowCopy and originalArray refer to the same nested objects. Changing the object in shallowCopy 
also affects originalArray.*/
/*Common Ways to Make a Shallow Copy:
Array methods like .slice(), .concat(), or using the spread operator (...): These methods create a new array, 
but only at the top level. If the array contains objects or arrays, they will still be shared between the 
original and the copied array.*/

// const shallowCopy1 = originalArray1.slice();
// const shallowCopy2 = [].concat(originalArray1);
// const shallowCopy3 = [...originalArray1];  // Spread operator

/*2. Deep Copy:
A deep copy creates a completely new array, with all nested objects and arrays being copied as well. This means 
that changes to the copied array or its nested elements will not affect the original array.*/

const originalArray2 = [{ name: "John" }, { name: "Doe" }];
const deepCopy = JSON.parse(JSON.stringify(originalArray2));
deepCopy[0].name = "Jane";  // Modify the object in the deep copied array
console.log(originalArray2[0].name);  // Output: "John" (no change in the original)

/*In this case, the deepCopy is completely independent of originalArray. Changing deepCopy does not affect the 
original.*/

