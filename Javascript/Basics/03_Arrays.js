// Array in js

// Description
// ============
// JavaScript arrays are resizable and can contain a mix of different data types.

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.


// JavaScript array-copy operations create shallow copies(Share the same reference). (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies(share different reference)).


// Declaration of the arrays

const arr1 = [1,2,3,4,5,6];

const arr2 = ["safar", 23, 23.5, true];

const arr3 = new Array(1,2,3,4);


// printing all of this in the interpolation syntax

console.log(`arr1: ${arr1} \narr2: ${arr2} \narr3: ${arr3}`);

console.log("=================================")
// Accessing the array Elements


console.log(`${arr1[1]} `) // accessing the elements based on the index value of the array

console.log(arr1.length) // finding the length of the array

//accessing the first element of the array
console.log(arr1[0])
//accessing the last element of the array
console.log(arr1[arr1.length-1])


// Array Methods in JS
const MethodArray = [1,6,7,4,3,2,6]

console.log(MethodArray.push(10)); // adding element at last
console.log(MethodArray.pop()); // removing last element
console.log(MethodArray.unshift(9)); // addin element at first place
console.log(MethodArray.shift()); // removing element from first place
console.log(MethodArray.includes(6)); // check given element is present or not inside the array

console.log(MethodArray.indexOf(6)); // returns the index of given element // give first index found for given element

console.log(MethodArray.join()); // converts array into string

console.log(MethodArray);


// slice and splice in js
// [1,2,3,4,5,6]
// const mynewarr = arr1.slice(1, 3);

console.log("Original Array", arr1);

// console.log("Sliced array",mynewarr)

console.log("Original Array", arr1);


const mynewarr1 = arr1.splice(1, 3);
console.log("Original Array", arr1);

console.log("Spliced array",mynewarr1)

console.log("Original Array", arr1);


// splice manuplates the original array too and also includes 


// Arrays methods

const arrone = [1,2,3,4]
const arrtwo = ["safar","umang","legament"]


// console.log(arrone.push(arrtwo)) // this will push whole arrtwo as 4th element in arrone
console.log(arrone)

// instead of this we can use concat to merge to arrays

// const mergedarr = arrone.concat(arrtwo);

// console.log(mergedarr)

// we can also use the spred oprator too to concat the array values

const newarr = [...arrone, ...arrtwo]
console.log("newarr",newarr)

// check this is array or not

console.log(Array.isArray(newarr))

























