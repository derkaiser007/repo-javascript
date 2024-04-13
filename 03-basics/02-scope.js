// node 02-scope.js

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
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))
// function addone(num){
//     return num + 1
// }


// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }