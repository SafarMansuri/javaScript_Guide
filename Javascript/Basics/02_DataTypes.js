/*
number
string
boolean
null
undefined
symbol 
*/

// typeof  => using this we can see the type of the variable

//********oprators ***************** */\\\


// console.log(2+2)
// console.log(2-2)
// console.log(2/2)
// console.log(2%2)
// console.log(2*2)
// console.log(2**3)

// type conversion in js

// console.log(1 +  "2");   //12
// console.log("1" +  "2");  //12
// console.log("1" +  2);   //12
// console.log("1" +  2 + 2); // 122
// console.log(1 +  2 + "2"); // 32

// Example of all the data types


let number = 3 // number

let name = "safar";  //string

let isTrue = true;  // boolean
 
const person = {firstname: "safar", lastName: "Mansuri" } // object

const card = ["Ford", "Renault", "hyundai"] // Array

const date = new Date("2025-01-05")
// ==================================
// Datatypes in js:

// =============

/*primitive and non-primitive


primitive

 String, Number, Boolean, null, undefined, Symbol, BigInt

dynamically typed:

JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

non-primitive (Reference types)
 Arrays, Objects, Functions


Note : Number is number in js (Number, Float, decimal)
*/
// Symbol
// =========
// declare a symbol

 //mostly use for unique values
 const id = Symbol('123');
 const anotherId = Symbol('123');
 const newSymbol = Symbol(23);
 console.log("newsymbol",newSymbol)

console.log(id === anotherId); // false

// both the values are diffrent



// non-primitive (Reference types)
//  Arrays, Objects, Functions

const heros = ["shaktiman", "Ironman", "spyderman"];


let myobg = {
  name:"safar",
  age:24
}

const myFunction = function() {

 console.log("hello world");
}


// type of



// Difference Between Undefined and Null
// undefined and null are equal in value but different in type:

typeof undefined      // undefined
typeof null           // object

null === undefined    // false
null == undefined     // true



typeof "John"          // Returns "string"
typeof ("John"+"Doe")  // Returns "string"
typeof 3.14            // Returns "number"
typeof (33 + 66)       // Returns "number"
typeof NaN             // Returns "number"
typeof 1234n           // Returns "bigint"
typeof true            // Returns "boolean"
typeof false           // Returns "boolean"
typeof {name:'John'}   // Returns "object"
typeof [1,2,3,4]       // Returns "object"
typeof {}              // Returns "object"
typeof []              // Returns "object"
typeof new Object()    // Returns "object"
typeof new Array()     // Returns "object"
typeof new Date()      // Returns "object"
typeof new Set()       // Returns "object"
typeof new Map()       // Returns "object"
typeof function () {}  // Returns "function"
// typeof x               // Returns "undefined"
typeof null            // Returns "object"



// stack and heap memory
// =======================
// The stack is used for static memory allocation, while the heap is used for dynamic memory allocation.

// Static memory allocation means that the size and location of the memory is fixed at compile time, while dynamic memory allocation means that the size and location of the memory can change at runtime.

// In JavaScript, primitive values (such as numbers, strings, booleans, etc.) are stored in the stack, while objects (such as arrays, functions, etc.) are stored in the heap.


// Stack (Primitive), Heap (Non-Primitive)

//   copy                 reference


// Example
// ========

// stack memory works with primitive types
let a  = "safar";
let b = a; // here we are making a change in copy of the variable a from stack
           // so that's why the original value will remain the same
b = "SafarAK"

console.log("a: ", a , "b: ", b) // a:  safar b:  SafarAK

// heap memory works with non primitive types

let userOne = {
    email:"safar@gmail.com",
    age:24
}
let userTwo = userOne
userTwo.email = "NewEmail@gmail.com";

console.log("userOne", userOne, "userTwo", userTwo)

// Heap memeory share's a referance of the non-primitive data so making a change in the value will impact the original values too..clear


let Person =  {
    name:"safar",
    age:24
}

// Deep copyes of the object
let Newperson = {...Person}  // 1


let NewPerson2 = Object.assign({}, Person) // 2


console.log("Prson", Person, "Newperson", Newperson, "NewPerson2", NewPerson2)

// summery:
// ========

// stack memory Share copys of the variables and heap share the referance that's why whenever we change the values of non-Primitive data types it changes the values for both the variables 


// => immutable and mutable

// Strings
// ========

// Declaration of Strings

let str1 = "safar";
let str2 = 'safar';
// let str2 = new String("safarAK");

//we can declare string like this too in js

let str3 = "It's safar";
let str4 = "this is 'safar'";
let str5 = 'This is "safar"';
let str6 = `This is also a valid "string"`;
//console.log(`str3: ${str3} str4: ${str4} str5: ${str5} str6 ${str6} `)

// some examples

let str = "safar";
//console.log(str[2]) // like this we can access string varibales

// Escape characters in String

//let string1 = "this is "advance" string "; // this will give error

// console.log(string1)

// To perfrom above opration on the string we can do something like this

let string2 = "This is \"Advance\" string"; // 1
let string3 = "It\'s alright!!";
let string4 = "This is how we can insert a \\ backslash"
console.log("String 2",string4)

// Template string

let stringfinal = `This
is 
called
template
string
`
console.log("stringfinal", stringfinal)


// ===================================================



// JS string Methods

let text = "This is Example String";


// To get the length of this string

console.log(text.length) // 22

// Accessing the character from the string

console.log(text[3]) // s

//Extracting String Characters

// This method returns the character at a specified index (position) in a string

/*console.log(text.charAt(2)) // i
console.log(text.charCodeAt(2)) // 105 
console.log(text.at(2)) // i
console.log(text.at(-2)) // n from last*/
/* Note
The at() method is a new addition to JavaScript.

It allows the use of negative indexes while charAt() do not.

Now you can use myString.at(-2) instead of charAt(myString.length-2).*/

// Extracting String Parts

//There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

/* This is Example String */

console.log(text.slice(0,4)) // This || The method takes 2 parameters: start position, and end position (end not included).

// few more example of slice
 
console.log(text.slice(4)) //  is Example String ||  If you omit the second parameter, the method will slice out the rest of the string:


console.log(text.slice(0, -4)) //This is Example St

console.log(text.slice(-4)) // ring

/*substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().*/
console.log("======================================")
console.log(text.substring(0,4)) // This

console.log(text.substring(4)) //  is Example String ||  If you omit the second parameter, the method will slice out the rest of the string:

console.log(text.substring(0,-4)) // returns empty string


/*substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.*/

console.log(text.substr(0, 2)) // Th

// If you omit the second parameter, the method will slice out the rest of the string:

console.log(text.substr(2)); // is is Example String


/*Note
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.*/


// JS string Methods

let text1 = "This is Example String";
let text2 = "new String"

//A string is converted to upper case with toUpperCase():
console.log(text.toUpperCase());
//A string is converted to lower case with toLowerCase():
console.log(text.toLowerCase());

//concat() joins two or more strings:

console.log(text.concat(text2))

// The trim() method removes whitespace from both sides of a string:

console.log(text.trim())
//The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.


//The replace() method replaces a specified value with another value in a string:

console.log(text.replace("Example", "W3Schools"));



// reference Link : https://www.geeksforgeeks.org/javascript-string-methods/?ref=lbp




// Numbers and Maths in JS
// =====================


// JavaScript has only one type of number. Numbers can be written with or without decimals.


// Numbers in JS

/*let x = 12;
let y = 12.13;
let z = 123e5;    // 12300000
let a = 123e-5;   // 0.00123*/
/*WARNING !!

JavaScript uses the + operator for both addition and concatenation.

Numbers are added. Strings are concatenated.*/
//If you add two numbers, the result will be a number:

// let x = 10;
// let y = 20;
// let z = x + y; // 30

// If you add two strings, the result will be a string concatenation:
// let x = "10";
// let y = "20";
// let z = x + y; 1020

// If you add a number and a string, the result will be a string concatenation:

// let x = 10;
// let y = "20";
// let z = x + y; // 1020


// If you add a string and a number, the result will be a string concatenation:

// let x = "10";
// let y = 20;
// let z = x + y; // 1020

//some confusing examples

// let x = 10;
// let y = 20;
// let z = "The result is: " + x + y; // The result is: 1020

// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z; // 3030


/*NOTE: The JavaScript interpreter works from left to right.

First 10 + 20 is added because x and y are both numbers.

Then 30 + "30" is concatenated because z is a string.*/

/*JavaScript will try to convert strings to numbers in all numeric operations:

This will work:

let x = "100";
let y = "10";
let z = x / y; // 10

This will also work:

let x = "100";
let y = "10";
let z = x * y; // 1000

And this will work:

let x = "100";
let y = "10";
let z = x - y;  // 90

But this will not work:

let x = "100";
let y = "10";
let z = x + y;*/ //10010

// * In the last example JavaScript uses the + operator to concatenate the strings.

// Note" Comparing two JavaScript objects always returns false.

let x = 2003.34234234
console.log(x.toString()); // converts a number to string
console.log(x.toExponential()); // Convert a number into an exponential notation:

console.log(x.toPrecision(4)); // total number with decimal values
console.log(Number.isInteger(x)); //  checks if the number is ineger or not
console.log(x.toLocaleString("en-IN")); // formats the number contry code wise
console.log(x.toFixed(2)) // count of numbers after the decimal

// Math in js
// ============


// Math In js

/*console.log(Math); // returns math object
console.log(Math.abs(-4)); // 4
console.log(Math.abs(4)); // 4
console.log(Math.round(4.6)); // 5 // round to nearest integer
console.log(Math.ceil(4.2)); // cealing //5
console.log(Math.floor(4.8)) // floor 4
console.log(Math.min(3,4,5,6)); // 3
console.log(Math.max(3,4,5,6)); // 6*/

// Generate a Randon Number

console.log(Math.random()); //  generate random number beetween 0  and 1
console.log(Math.random() * 10 + 1) //

console.log((Math.random() * 10) + 1);// above both are same

console.log(Math.floor((Math.random() * 10) + 1));// above both are same

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min +1)) + min )


// Dates In JS
// ===================

const d = new Date();


// Thu Jan 16 2025 12:52:56 GMT+0530 (India Standard Time)


// Note
// Date objects are static. The "clock" is not "running".

// The computer clock is ticking, date objects are not.


// By default, JavaScript will use the browser's time zone and display a date as a full text string:

// Thu Jan 16 2025 12:29:44 GMT+0530 (India Standard Time)

// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)












































































































