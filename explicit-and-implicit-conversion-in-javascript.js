/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
//Turned string 5 into an integer 5, same result.
console.log("The result is: " + result);

let isValid = false;
//Strings are considered a true value, having "false" would always make it true.
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = (Number(age)) + 5;
//Adding the Number() explicit converison turns the age string into an integer allowing for total age to calculate.
console.log("Total Age: " + totalAge);


let bigNumber = "175" - 27;
console.log(bigNumber);
//This is my implicit code.

console.log(String(null));
//Here are some explicit examples.
let notANumber;
console.log(notANumber)

console.log(Number("A"))