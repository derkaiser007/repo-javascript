// node 03-basics/04-iife.js
// Immediately Invoked Function Expressions (IIFE)
/*Key Characteristics:
1)Immediately Executed: As soon as the function is defined, it is executed right away.
2)Private Scope: Variables inside an IIFE are not accessible outside the function, which helps in avoiding 
global namespace pollution.
3)Does Not Need a Name: IIFEs are usually anonymous functions, meaning they don’t require a name because they 
don’t need to be called later.*/


(function name(){
    console.log(`Hi!`);
})();


(function() {
    console.log(`Hi!`);
})();


(() => {
    console.log(`Hi!`);
})();


(function(name) {
    console.log(`Hi ${name}!`);
})('Niraj');


((name) => {
    console.log(`Hi ${name}!`);
})('Niraj');


(function() {
    const message = "Hello, World!";
    console.log(message);  // Output: Hello, World!
})();
// message is not accessible here
console.log(typeof message);  // Output: undefined


(function() {
    const a = 5;
    const b = 10;
    console.log(a + b);  // Output: 15
})();
// a and b are not accessible here
console.log(typeof a);  // Output: undefined


const counter1 = (function() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
})();
console.log(counter1());  // Output: 1
console.log(counter1());  // Output: 2


const counter2 = (function() {
    let count = 0;
    return {
        increment() {
            count += 1;
            return count;
        },
        decrement() {
            count -= 1;
            return count;
        }
    };
})();
console.log(counter2.increment());  // Output: 1
console.log(counter2.increment());  // Output: 2
console.log(counter2.decrement());  // Output: 1



