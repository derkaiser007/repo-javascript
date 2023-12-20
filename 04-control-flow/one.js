//node 04-control-flow\one

// <, >, <=, >=, ==, !==, ===, !==, &&, ||

// == is the comparison operator. It will only return true if both values are equivalent after coercing 
// their types to the same type. === is a more strict comparison operator often called the identity 
// operator. It will only return true if both the type and value of the operands are the same.

// let a = 25
// let b = '25'

// if(a == b){
//     console.log('Equal')
// } else {
//     console.log('Not Equal')
// }

// if(a === b){
//     console.log('Equal')
// } else {
//     console.log('Not Equal')
// }



//Scope: Global Scope & Block Scope
// let a = 25
// let b = '25'

// if(a == b) {
//     let power = 'fly'
//     console.log(`Power: ${power}`)
// }
// console.log(`Power: ${power}`)

// if(a == b) {
//     const power = 'fly'
//     console.log(`Power: ${power}`)
// }
// console.log(`Power: ${power}`)

// if(a == b) {
//     var power = 'fly'
//     console.log(`Power: ${power}`)
// }
// console.log(`Power: ${power}`)



// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }



// let a = 525
// if (a <= 100) {
//     console.log('a <= 100')
// } else if (a > 100 && a <= 500) {
//     console.log('100 < a <= 500')
// } else {
//     console.log('a > 500')
// }



// const month = 5
// switch(month){
//     case 1:
//         console.log('Jan')
//         break
//     case 2:
//         console.log('Feb')
//         break
//     case 3:
//         console.log('Mar')
//         break
//     case 4:
//         console.log('Apr')
//         break 
//     case 5:
//         console.log('May')
//         break
//     case 6:
//         console.log('Jun')
//         break
//     default:
//         console.log('Beyond Jun')       
// }

// const month = 'jan'
// switch(month){
//     case 'jan':
//         console.log('Jan')
//         break
//     case 'feb':
//         console.log('Feb')
//         break
//     case 'mar':
//         console.log('Mar')
//         break
//     case 'apr':
//         console.log('Apr')
//         break 
//     case 'may':
//         console.log('May')
//         break
//     case 'jun':
//         console.log('Jun')
//         break
//     default:
//         console.log('Beyond Jun')       
// }