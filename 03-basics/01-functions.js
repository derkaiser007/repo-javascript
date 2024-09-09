// node 03-basics/01-functions.js

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);

}

// addTwoNumbers(3, 5)

function loginUserMessage(username){
    if(!username){
        return `Please enter a username...`
    }
    return `${username} has just logged in.`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage('niraj'))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000, 10000)) // [ 500, 2000, 10000 ]

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is $${anyobject.price}.`);
}

// const user = {username: "hitesh", price: 199}
// handleObject(user)

// handleObject({username: "sam", price: 399})

function returnSecondValue(getArray){
    return getArray[1]
}

// const myNewArray = [200, 400, 100, 600]
// console.log(returnSecondValue(myNewArray));

// console.log(returnSecondValue([200, 400, 500, 1000]));