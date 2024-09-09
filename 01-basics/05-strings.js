// node 01-basics/05-strings.js

const name = "niraj" // string primitive datatype
const repoCount = 50
// console.log(name + " " + repoCount + " Value");
// console.log(name, repoCount + " Value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('niraj-com') // string object
// console.log(gameName[0]);
// console.log(gameName.__proto__); // {} means object.
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('c'));
// console.log(gameName.indexOf('t'));
// console.log(gameName.split('-')); // [ 'niraj', 'com' ]

const newString = gameName.substring(0, 4)
// console.log(newString); //nira

const anotherString = gameName.slice(-9, 4)
// console.log(anotherString); //nira

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20', '-')) // https://hitesh.com/hitesh-choudhary
// console.log(url.includes('hitesh'))  // true
// console.log(url.includes('sundar'))  // false
