// 🦁🦁🦁 Callbacks 🦁🦁🦁
/* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
  Use the higher-order function called consume to do the following:
    1. Receive 3 parameters: a, b and cb. The first two parameters (a and b) can take any argument (we can pass any value as an argument) and the last parameter (cb) accepts a callback
    2. Return the invocation of cb taking a and b its arguments
    
    💡 NOTE: The tests for 'consume' will pass if it is created correctly and also after you correctly complete the functions 'add' and 'greeting' below in Step 2.
  */

function consume(/*Your Code Here */) {
  /*Your Code Here */
}

// 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁

/*  Use add to do the following:
 1. Receive two numbers as an argument that are passed in from its first and second parameters
 2. Return the sum of those numbers
 */

function add(/*Your Code Here */) {
  /*Your Code Here*/
}

/* Use multiply to do the following:
1. Receive two numbers as an argument that are passed in from its first and second parameters
2. Return the product of those numbers
*/

function multiply(/*Your Code Here */) {
  /*Your Code Here */
}

/* Use greeting to do the following:
1. Receive two strings (a first name and last name) as an argument that are passed in from its first and second parameters
2. Return "Hello {first-name} {last-name}, nice to meet you!"
💡 NOTE: The string returned must match the format above or the test will not pass!
*/

function greeting(/*Your Code Here */) {
  return /*Your Code Here */
}

// 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!
