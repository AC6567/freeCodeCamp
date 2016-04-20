/* Challenge #50: Local Scope and Functions
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding
*/
function myLocalScope() {
 var myVar = "use strict";
  console.log(myVar);
 }
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// Now remove the console log line to pass the test
