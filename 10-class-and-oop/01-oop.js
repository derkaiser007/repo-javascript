//node 10-class-and-oop\01-oop

// const user = {
//     username: "niraj",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log(`${user.username}`)
//         console.log(this)
//     }
// }

// console.log(user.username)
// user.getUserDetails()
// console.log(this)


// function User(username, loginCount, isLoggedin){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedin = isLoggedin

//     this.greeting = function(){
//         console.log(`Hello ${this.username}!`)
//     }

//     return this
// }

// const userOne = new User("niraj", 8, true)
// const userTwo = new User("samay", 10, false)
// console.log(userOne)
// console.log(userTwo)
// console.log(userOne.constructor)
// userOne.greeting()
// userTwo.greeting()