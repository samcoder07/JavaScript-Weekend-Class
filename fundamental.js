// code structure

// statement
// console.log("hello world");
// Semicolons
// console.log("hello world");
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

// let a = 10;
// a++;
// console.log(a);

// preifx

// let b = 10;
// ++b;
// console.log(b);

// --
// post fix
// let c = 10;
// c--;
// console.log(c);

// prefix
// let d = 10;
// --d;
// console.log(d);

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

// let price=12.25
// console.log(price??console.log(0));

// string

// for of array
// let arr = [10, 20, 30, 40, 50, 60, 70];

// for (let key of object) {
//   console.log(key);
// }

// String;
// let str = "DUCAT";
// for (const character of object) {
//   console.log(character);
// }

// star pattern

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     if (i >= j) {
//       document.write("*");
//     }
//   }

//   document.write("<br />");
// }

// for (let row = 1; row <= 5; row++) {
//   for (let space = 0; space <= 5 - 1 - row; space++) {
//     document.write("&nbsp;&nbsp;");
//   }

//   for (let col = 1; col <= row; col++) {
//     document.write("*");
//   }

//   document.write("<br />");
// }

// print 1 to 100
// let num = 1;
// while (num <= 18) {
//   console.log(number);

//   number++;
// }

// array

// let array = [10, 20, 30, 40, 50];

// let index = 0;

// while (index < array.length) {
//   console.log(array[index]);
//   index++;
// }

// string
// let str = "DUCAT";
// let index = 0;
// while (index < str.length) {
//   console.log(str[index]);
//   index++;
// }

// question of display count number
// let number = 12345678910;
// let index = 0;
// while (number > index) {
//   index++;

//   number = parseInt(number / 10);
//   console.log(index);
// }

// beaking the loop

// let array = [10, 20, 30, 40, 50, 60];
// let check = false;
// for (let index = 0; index < array.length; i++) {
//   console.log(array[index]);
//   if (array[index] === 30) {
//     check = true;
//     break;
//   }
// }

// if (check) {
//   console.log("item found");
// } else {
//   console.log("item not found");
// }

// skipping the value from a loop
// for (let index = 0; index < array.length; i++) {
//   if (array[index] === 30) {
//     continue;
//   }
//   console.log(array[index]);
// }


// objects

// literals and properties

// square and brackets

// computed propertiese

// property value shorthand

// property names limitaitons

// property existence test,"in" operator

// the "for..in" loop


// literals and properties
// square and brackets
// let object={
// 	name:"sam",
// 	designation:"IT",

// 	getdetail: function() {
// 		console.log(name);
// 	}
// }

// console.log(object.name);
// object.getdetail();
// console.log(object['name']);
// object['getdetail']()


// computed propertiese
// let firstName='sam';

// let object={
// 	[firstName]:firstName
// }

// console.log(object);
// console.log(object['samarth saluja']);

// property value shorthand
// let firstName='sam';

// let object={
// 	firstName
// }

// console.log(object);

// property name limitaions

// let objects={
// 	$firstName:"$firstName",
// 	$lastName:"$lastName"
// }

// for (const key in object) {
// 	console.log(key,objects[key]);
// 	console.log(key);
// }


// property existence test,"in" property

// let Object={
// 	name1:"deepak"
// }

// console.log("name" in object);

// let array=[
// 	{name:"sam"},
// 	{age:"15"}
// ]

// for (const obj of array) {
// 	if ("name" in obj) {
// 		console.log(obj.name);
// 	}
// 	if ("age" in obj) {
// 		console.log(obj.age);
// 	}
// }

// object references and copying

// comparison by reference

// closing and merging, object.assign

// nestesd cloning

// stuctured clone


// primitive datatype data is not shared it's shares address only multi address share


// referenced datatype shares only data not address only data share multi
// let array=[10,20,30,40,50]

// let array2= array;

// array2[array2.length]=60;

// console.log(array2);

// object cloning
// method 1 assign
// let obj3 = Object.assign (obj,obj2)
// console.log(obj);
// console.log(obj2);

// structured clone

// let obj={
// 	firstName:"sam",
// lastName:"saluja"}

// let obj2=structuredClone(obj);

// console.log(obj);
// console.log(obj2);

// garbage collection

// object method, "this" represents current object value
// method shorthand
// "this" in methods
// "this" is not bound
// arrow function have no "this"

// this method shorthand
// let obj={
// 	firstName:"John",
// 	lastName:"Doe",

// 	getDetails:function() {
// 		this.testing()
// 		console.log(this.firstName +""+this.lastName);
// 	},
// 	testing(){
//       console.log("testing");
// 	}
// }


// function Employee() {
// 	this.firstName = "sam";
// 	this.lastNam = "saluja";
// }

// let emp1 = new Employee()
// let emp2 = new Employee()

// console.log(emp1, emp2);

// note:- constructor is a built in method which is inside the class defination and class is called when class instance is created

// function Testing() {
// 	console.log(this);
// 	console.log(new.target);
// }

// let t = new Testing();
// let t1 = Testing();

// function Employee(fname, lname) {
// 	this.firstName = "sam";
// 	this.lastName = "saluja";

// 	this.getFullName = function () {
// 		console.log(this.firstName + " " + this.lastName);
// 	}
// }

// let emp1 = new Employee("dheeraj", "singh")
// let emp2 = new Employee("sam", "singh")

// console.log(emp1);
// console.log(emp2);

// optional chaining
// let object = {
// 	name: {
// 		firstName: "sam",
// 		lastName: "saluja"
// 	},
// 	nums: [10, 20],
// 	testing() {
// 		console.log("testing");
// 	}
// }

// // object
// console.log(object.name?.firstName);

// // array
// console.log(object.nums?.[0]);

// // functions
// object.testing?.()

// let sym = Symbol("id");

// let object = {
// 	[sym]: "sam",
// 	age: 10
// }

// console.log(object[key]);

// for (const key in object) {
// 	console.log(key, object[key]);
// }

// topic numbers

// let number = 10;

// binary
// console.log(number.toString(2));
// // hexa
// console.log(number.toString(16));

// console.log(Math.floor(number));

// console.log(Math.ceil(number));

// let number1 = 21.22525252;
// console.log(number1.toFixed(2));

// imprecise calculation

// console.log(10 / 5 + true - false + (10 * 30));

// isFinite

// let number = null;
// console.log(isFinite(number));

// true countable value(+ve/-ve) "" boolean []  [number] null
// false non countable value(Infinity(-ve/+ve)/nan) string
// [non number type][10, 20] { }

// isNaN
// let number = {}
// console.log(isNaN(number));

// false countable value(+ve/-ve)
// inifinite "" bolean []
// true non countable value(nan) String


// wta to generate random number 4 digits

// const random = Math.random()
// random;

// const otp = Math.round(random * 9999)

// document.write('Users Otp is\t', otp);

// question
// wtp to convert lowercase character to uppercase without using any built in method

// Array.of 

// let array = array.of(10, 20, 30)
// console.log(array);

// Array.from 
let array1 = array1.from(10, 20, 30)
console.log(array);


// multidimensional  array
// let array = [
// 	[
// 		[10, 20, 30],
// 		20
// 	],
// 	[30, 40]
// ]

// console.log(array[0][3][5]);

// wtp to conver 2d to 1d array without using any built in method , duplicate value does not allow


// splice
// delete
// let array = [10, 20, 30, 40, 50]
// let result = array.splice(2, 2)
// console.log(array, result);

// update
// let array = [10, 20, 30, 40]
// let result = array.splice(2, 2, 300, 400)
// console.log(array, result);

// // add
// let result = array.splice(2, 0, 100)
// console.log(result);

// for Each loop
// let result = array.forEach((value, index, arr) => {
// 	console.log(value, index, arr);
// });

// index / last index of

// let array = [10, 20, 30, 40, 50, 60]

// console.log(array.indexOf(30));
// console.log(array.lastIndexOf(300));

// console.log(index);
// array.splice(index, 1)

// find

// let result = array.find((value, index, arr) => {
// 	if (value === 30) {
// 		return arr;
// 	}
// 	console.log(value, index, arr);
// })

// console.log(result);

// let employee = [
// 	{ name: "sam", department: "IT" }
// ]

// let emp = employee.find((emp) => emp.name === "sam")
// console.log(emp);

// filter
// let result = array.filter((value, index, arr) => {
// 	if (value == 30) {
// 		return value;
// 	}
// 	console.log(value, index, arr);
// })

// console.log(result);

// let result = array.findIndex((value, index, arr) => {
// 	if (value === 300) {
// 		return value
// 	}
// })


// let result1 = array.findLastIndex((value, index, arr) => {
// 	if (value === 300) {
// 		return value
// 	}
// })

// Transform an array

// map

// let result = array.map((value, index, arr) => {
// 	console.log(value, index, arr);
// })
// console.log(result);


// sort

// array.sort((a, b) => a - b)
// console.log(array);

// that works in parent array map sort and reverse

