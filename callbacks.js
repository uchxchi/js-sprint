// 🦁🦁🦁 Callbacks 🦁🦁🦁
/* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
  Use the higher-order function called consume to do the following:
    1. Receive 3 parameters: a, b and cb. The first two parameters (a and b) can take any argument (we can pass any value as an argument) and the last parameter (cb) accepts a callback
    2. Return the invocation of cb taking a and b its arguments
    
    💡 NOTE: The tests for 'consume' will pass if it is created correctly and also after you correctly complete the functions 'add' and 'greeting' below in Step 2.
  */

function consume(a, b, cb) {
  return cb(a, b);
}
const subtract = (a, b) => a - b;
console.log(consume(5, 2, subtract));

// 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁

/*  Use add to do the following:
 1. Receive two numbers as an argument that are passed in from its first and second parameters
 2. Return the sum of those numbers
 */
const divide = (a, b)=> a / b;
const second = (a, b)=> a * b;
const words = (a, b)=> `${a} ${b}! this works`
console.log(consume(50, 10, divide));
console.log(consume(15, 20, second));
console.log(consume('oh', 'wow', words));

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(8, 90));

/* Use multiply to do the following:
1. Receive two numbers as an argument that are passed in from its first and second parameters
2. Return the product of those numbers
*/

function multiply(arg1, arg2) {
  return arg1 * arg2;
}
console.log(multiply(2, 10));

/* Use greeting to do the following:
1. Receive two strings (a first name and last name) as an argument that are passed in from its first and second parameters
2. Return "Hello {first-name} {last-name}, nice to meet you!"
💡 NOTE: The string returned must match the format above or the test will not pass!
*/

function greeting(first, last) {
  return `Hello ${first} ${last}, nice to meet you!`
}
console.log(greeting('Alexander', 'Oguejiofor'))

// 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!
