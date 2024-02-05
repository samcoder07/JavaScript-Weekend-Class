// code structure 

// statement 
console.log("hello world")
// Semicolons
console.log("hello world");
// comments 
/**
 * console.log("hello world")
 */

/**
 * Variales
 *  A variable
 * let 
 * const 
 * var 
 * variale naming
 * the name must contain only letters, digits,or the symbols $ and _.
 * The first character must not be a digit.
 */

// var 
/**
 *  var a=10;
a=20;
console.log(a);
 */

// let 
/**s
 *  let a=10;
let a=10;
a=20;
console.log(a);
 */

// const 
/**
 *  const PI= 3.14;
 *  const PI= 3.14;
console.log(PI);
 */

// Interaction : alert, prompt,confirm 

// propmt 
// let fullName=prompt("Enter your name");
// let age=prompt("Enter your age");

// console.log(fullName);
// console.log(age,typeof age);

// type conversion 

// string 

// let str=String(number)
// console.log(str,typeof str);

// // numeric 
// let number=10;
// console.log(number,typeof number);

// let number2=Number(str);
// console.log(number2,typeof number2);
// // boolean

// let bool=true;
// console.log(bool,typeof bool);
// let str2= String(bool)
// console.log(str2,typeof str2);

// Boolean conversion 
// string 
// let str=""
// console.log(str,typeof str);
// let bool=Boolean(number)
// console.log(bool,typeof bool);
// // number 
// let number=""
// console.log(str,typeof number);
// let bool=Boolean(number)
// console.log(bool,typeof bool);

// Basic operators 

// Terms:"unary","binary","operand"

// Increment and decrement operators.
// Bitwise operators.
// Assignment operators.
// Addition 
// Substraction 
// multiplication
// division 
// reminder
// exponentiation 

// String concatenation with binary 

// operator precedence 

// make precedence table H.W.

// number conversion , unary +
// let str=10;
// console.log(str, type of str);
// let number=+10;
// console.log(number, type of number);

// Increment/decrement 
// ++
// post fix 

let a=10;
a++;
console.log(a);

// preifx 

let b=10;
++b;
console.log(b);

// --
// post fix 
let c=10;
c--;
console.log(c);

// prefix 
let d=10;
--d;
console.log(d);

// 22 - 9 + 11 + 10
// =21+ 10=32


// Assignment Operators 

// =

// +=
// let a=20;
// let b=30;
// a += b;
// console.log(a);

// -=

// *=

// /=

// %=


// **=


// comparison operators (these are knows as binary operators)

// == equal to 

// === equal value and equal type 


// !=

// !== 

// >

// < 

// >= 

// <= 

// ? 

// in division it will provide till the questiont will be zero 


// descision making statement 

// if
// let num=10;
// if (num%2==0) {
//     console.log("number is even");
// }
// else
// let num1=10;
// if (num1%2==0) {
//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }
// else if
// if (num%2==0 && num%5==0) {
//     console.log("number is divisible by 2 and 5");
// }
// else if (!num %2==0){
//     console.log("number is divisible by 2");
// }
// else if(num%5==0){
//     console.log("number is divisible by 2 and  5");
// }
// else{
//     console.log("number is not divisible by 2 and 5");
// }

// nested if else 
// if (number>0) {
//     if (number%2===0) {
//         console.log("number is even");
//     }
//     else{
//         console.log("number us odd");
//     }
// }

// else{
//     console.log("number should be greater than 0");
// }

// ?
// let num=18;
// (num%2===0)?console.log("num is even"):console.log("num is odd");



// nullish coalescing operator '??'

let price=12.25
console.log(price??console.log(0));
