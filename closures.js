/* 🚀🚀🚀🤓 Task 1: 🤓🚀🚀🚀 
Study the code below and explain in your own words why nested function can access the variable internal.
Comment out your explanation, s it doesnt affect your code */

const external = "I'm outside the function"

function myFunction() {
  console.log(external)
  const internal = "Hello! I'm inside myFunction!"

  function nestedFunction() {
    console.log(internal)
  }
  nestedFunction()
}
// myFunction();

//🚀🚀🚀 ⬇️ 📝 Explanation here ⬇️ 📝 🚀🚀🚀: Nested function can access the variable because functions can access the variables of their parent or the function within which it is nested, this is known as lexical scoping.

/* 🚀🚀🚀 Task 2: Counter 🚀🚀🚀 */
/* Use summation to do the following:
    1. Receive a number as an argument passed from a parameter
    2. Use a counter to return the summation of that number. 
    
🌟 EXAMPLE: invoking `summation(4)` should return 10 because 1+2+3+4 is 10. 
💡 NOTE: you may use a for loop for this function if you wish 
*/

function summation(num) {
   let counter = 0;
   for(let i = 0; i <= num; i++){
     counter +=i;
   }
   return counter;
  }
  
console.log(summation(4));
