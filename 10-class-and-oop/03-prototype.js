//node 10-class-and-oop\03-prototype

// let nameArr = ["niraj", "samay", "samar"]

// let sportObj = {
//     niraj: "football",
//     samay: "cricket",
//     samar: "kabaddi"
// }

// Object.prototype.nameFunction = function(){
//     console.log("Sport Lovers")
// }

// Array.prototype.sportFunction = function(){
//     console.log("Favourite Sprots")
// }

// nameArr.nameFunction()
// sportObj.nameFunction()
// nameArr.sportFunction()
// //sportObj.sportFunction()


//Inheritance
// const Contact = {
//     number: 9876543210,
//     email: "niraj@google.com"
// }
// const User = {
//     name: "niraj",
//     address: "India",
//     __proto__: Contact
// }

// console.log(User)
// console.log(User.email)


// const Cricket = {
//     cricket: "outdoor"
// }
// const Sports = {
//     badminton: "indoor",
//     football: "outdoor",
//     swimming: "indoor"
// }
// //Sports.__proto__ = Cricket
// Object.setPrototypeOf(Sports, Cricket)

// console.log(Sports)
// console.log(Sports.cricket)


// let userName = "     Niraj     "

// String.prototype.trueLength = function(){
//     //console.log(`${this}`)
//     //console.log(`${this.trim()}`)
//     console.log(`${this.trim().length}`)
// }

// userName.trueLength()
// "neeraj".trueLength()