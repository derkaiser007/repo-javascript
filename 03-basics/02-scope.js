// node 03-basics/02-scope.js

//Local Scope
//Global Scope

// var c = 300
// let a = 250
// if (true) {
//     let a = 10
//     var b = 20
//     console.log("INNER: ", a);    
// }

// console.log(a);
// console.log(b);
// console.log(c);


// var c = 300
// let a = 250
// if (true) {
//     a = 10
//     var b = 20
//     console.log("INNER: ", a);    
// }

// console.log(a);
// console.log(b);
// console.log(c);


// var c = 300
// let a = 250
// if (true) {
//     let a = 10
//     let b = 20
//     console.log("INNER: ", a);    
// }

// console.log(a);
// console.log(b); // Throws error
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // Throws error: website is not defined

    two()

}

one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // Throws error: website is not defined
}
// console.log(username); // Throws error: username is not defined


// ++++++++++++++++++ interesting ++++++++++++++++++ //


// console.log(addone(5)) // Throws no error
// function addone(num){
//     return num + 1
// }


// addTwo(5) // Throws error: Cannot access 'addTwo' before initialization
// const addTwo = function(num){
//     return num + 2
// }