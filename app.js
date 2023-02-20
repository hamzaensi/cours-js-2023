/**
 * Lesson 1 : 
 * 
 */

// Basic 1 
// Log to console
/*
console.log("Hello World"); 

console.log(123);
console.log(false);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.error('This is some error');
console.clear();
console.warn('This is a warning');


console.time('Hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello');

*/

// Basic 2 
// var, let, const

// var name1 = 'John Doe';
// console.log(name1);
// name1 = 'Steve Smith';
// console.log(name1);

// //  Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// //  letters, numbers, _, $
// // Can not start with number
// //var x1 ='test';
// //  Multi word vars
// var firstName = 'John'; // Camel case
// // var first_name = 'Sara'; // Underscore
// // var FirstName = 'Tom'; // Pascal case
// // var firstname;



// LET
  //  let name1;
  //  name1 = 'John Doe';
  //  console.log(name1);
  //  name1 = 'Steve Smith';
  //  console.log(name1);


//CONST
// const name2 = 'John';
// console.log(name2);
//Can not reassign
//name2 = 'Sara';
//Have to assign a value
// const greeting='hello';



// const person = {
//   name: 'John',
//   age: 30
// }
// console.log(person);

// person.name = 'Sara';
// person.age = 32;

// console.log(person);

// const numbers = [1,2,3,4,5];
// console.log(numbers);
// numbers.push(6);

// console.log(numbers);


// Basic 3 
  // PRIMITIVE

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();
console.log(today);
console.log(typeof today);
