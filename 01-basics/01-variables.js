// node 01-basics/01-variables.js

const accountId = 144553
console.log(accountId)

let accountEmail = "niraj@google.com"
console.log(accountEmail)

var accountPassword = "12345"
console.log(accountPassword)

accountCity = "Jaipur"
console.log(accountCity)

let accountState;

// accountId = 2
// console.log(accountId)

accountEmail = "niraj@twitter.com"
console.log(accountEmail)

accountPassword = "21212121"
console.log(accountPassword)

accountCity = "Bengaluru"
console.log(accountCity)

//console.table([accountId, accountEmail, accountPassword, accountCity])
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// Prefer not to use var
// because of issue in block scope and functional scope
