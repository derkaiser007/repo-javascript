//node 10-class-and-oop\10-get_set

// function User(username, password){
//     this.username = username
//     this._password = password

//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
// }

// const user = new User('niraj', 'xyz')
// console.log(user.password);



// class User {
//     constructor(username, password){
//         this.username = username,
//         this.password = password
//     }

//     get password(){
//         //return this._password
//         return `${this._password.toUpperCase()}`
//     }

//     set password(value) {
//         this._password = value
//     }
// }

// const user = new User('niraj', 'xyz')
// console.log(user.password);