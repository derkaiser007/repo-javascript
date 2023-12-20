//Do an async task
// DB calls, cryptography, network
// node 09-advance-concepts\promises

//Promise One
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 1.")
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed.")
// })


//Promise Two
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2.")
//         resolve()
//     }, 3000)
// }).then(function(){
//     console.log("Promise Consumed.")
// })


//Promise Three
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "niraj", email: "niraj@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })


//Promise Four
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         //let error = true
//         let error = false
//         if(!error){
//             resolve({username: "niraj", email: "niraj@example.com"})
//         } else {
//             reject("ERROR: Something went wrong.")
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.username
// })
// .then((username) => {
//     console.log(username)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     console.log("Either promise resolved or rejected.")
// })


//Promise Five
// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         //let error = true
//         let error = false
//         if(!error){
//             resolve({username: "niraj", email: "niraj@example.com", password:"123"})
//         } else {
//             reject("ERROR: Something went wrong.")
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)        
//     }
// }
// consumePromiseFive()


//Promise Six
// const promiseSix = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         //let error = true
//         let error = false
//         if(!error){
//             resolve({user: "niraj"})
//         } else {
//             reject("ERROR: Something went wrong.")
//         }
//     }, 5000)
// })

// async function getAllUsers(){
//     try {
//         const responsePromiseSix = await promiseSix
//         console.log(responsePromiseSix)
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch(e) {
//         console.log(e)     
//     } 
// }
// getAllUsers()


//Promise Seven
// const promiseSeven = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         //let error = true
//         let error = false
//         if(!error){
//             resolve()
//         } else {
//             reject("ERROR: Something went wrong.")
//         }
//     }, 5000)
// })

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch(e) {
//         console.log(e)     
//     } 
// }

// async function executeOperations() {
//     try {
//         await promiseSeven; // Wait for promiseSix to be settled (resolved or rejected)
//         await getAllUsers(); // Now, call getAllUsers after promiseSix is settled
//     } catch (e) {
//         console.log(e);
//     }
// }
// executeOperations();


//Promise Eight
// const promiseEight = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         //let error = false
//         if(!error){
//             resolve()
//         } else {
//             //reject("ERROR: Something went wrong.")
//             console.log("ERROR: Something went wrong.")
//         }
//     }, 5000)
// })

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((e) => console.log(e))


//Promise Nine
// const promiseNine = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         //let error = false
//         if(!error){
//             resolve(fetch('https://api.github.com/users/hiteshchoudhary'))
//         } else {
//             reject("ERROR: Something went wrong.")
//         }
//     }, 5000)
// })

// promiseNine
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((e) => console.log(e))

