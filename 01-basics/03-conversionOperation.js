// node 01-basics/03-conversionOperation.js

let score = true
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;
// null => 0
// undefined => NaN

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "abc"
let str2 = "xyz"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3);

console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; //prefix operator
gameCounter++; //postfix operator
console.log(gameCounter);

//prefix operator
let x = 5;
let result1 = ++x;  // First, x is incremented to 6, then result is assigned 6
console.log(result1); // 6
console.log(x);      // 6

//postfix operator
let y = 5;
let result2 = y++;  // First, result is assigned the current value of x (5), then x is incremented to 6
console.log(result2); // 5
console.log(y);      // 6


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion