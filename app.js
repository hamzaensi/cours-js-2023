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

// // String
// const name = 'John Doe';
// // Number
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbol
// const sym = Symbol();

// // REFERENCE TYPES - Objects
// // Array
// const hobbies = ['movies', 'music'];
// // Object literal
// const address = {
//   city: 'Boston',
//   state: 'MA'
// }
// const today = new Date();
// console.log(today);
// console.log(typeof today);


// Basic 4 
/*
let val;

// Number to string
val = String(555);



val = String(4+4);


// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);


// // toString()
// val = (5).toString();
// val = (true).toString();

// // String to number
val = Number('5');

val = Number(false);

// val = Number(false);
val = Number(null);

val = Number('hello');

val = Number([1,2,3]);


val = parseFloat('100.30');

// val = parseFloat('100.30');
console.log(val);
// // Output
// // console.log(val);
// // console.log(typeof val);
// // console.log(val.length);
// // console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;

const sum = Number(val1) + val2;

console.log(sum);
// console.log(typeof sum);

*/
/*
// Basic 5 

const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;


 
val = num1 * num2;

val = num1 - num2;
val = num1 / num2;

val = num1 % num2;



// Math Object
val = Math.PI;

val = Math.E;

val = Math.round(2.5);

val = Math.ceil(2.4);

val = Math.floor(2.8);

val = Math.sqrt(64);

val = Math.abs(-3);
//val = Math.sqrt(Math.pow(8, 2));

val = Math.pow(7, 2);

val = Math.min(2,33,4,1,55,6,3,-2);

val = Math.max(2,33,4,1,55,6,3,-2);

val = Math.random();

val = Math.floor(Math.random() * 50 + 7);

console.log(val);



// Basic 6 

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Brad Hello there my name is Brad and Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;





// Concatenation
val = firstName + ' ' + lastName;


// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;



// Escaping
val =  "That's awesome, I can't wait";

// Length
val = firstName.length;



// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();

val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');

val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');

// Get last char
val = firstName.charAt(firstName.length - 1);
//William
// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);

val = firstName.slice(-5,-2);//William

// split()
val = str.split(' ');

val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('Brad');


ch=""
v=str.split(" ");
for(let i=0;i<v.length;i++)
{
  if (v[i]=='Brad')
  
    v[i]='Jack';
  
}
ch=String(v);
ch=ch.replaceAll(","," ");
console.log(ch);







 



// Basic 7 
// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {'nom':'Ahmed', 'prenom':'Mohamed'}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];

val = numbers[0];

// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(80);

// MUTATING ARRAYS
//  Add on to end
numbers.push(250);

// // Add on to front
numbers.unshift(120);

// // Take off from end
numbers.pop();

// // Take off from front
numbers.shift();


// // Splice values

numbers.splice(1,3);
console.log(numbers);
// // Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
console.log(numbers);
val = numbers.sort();
console.log(val);


// // Use the "compare function"
val = numbers.sort(function(x, y){
    return x - y;
});
console.log(val);
// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function over50(num){
  return num > 40;
}

val = numbers.find(over50);

console.log(numbers);

*/



// Basic 8 

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 39,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2023 - this.age;
  }
}




let val;

val = person;

// Get specific value
val = person.firstName;



val = person['lastName'];

val = person.age;

val = person.hobbies[1];

val = person.address.state;

val = person.address['city'];

val = person.getBirthYear();
//console.log(val);


const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];
let ages =0;
for(let i = 0; i < people.length; i++){
  ages +=people[i].age;
  
}
console.log(ages);

// Exercice

// 3 cars  : type , price , color  

// stocker les 3 cars dans un tableau 
// calculer la somme d'achat 
// ajouter 5% prix de vente : sellPrice 

const cars=[
  {'type':"BMW",'price':50.100,'color':'black'},
  {'type':"Marcedes",'price':80.100,'color':'White'},
  {'type':"Lembo",'price':510.100,'color':'Red'}

];
console.log(cars);
let prixAchat=0;
for(let i=0;i<cars.length;i++)
{
  
  prixAchat+=cars[i].price;
}
console.log(prixAchat);
for(let i=0;i<cars.length;i++)
{
  cars[i]['sellPrice']=cars[i].price*1.05;
}
console.log(cars);
let prixVente=0;
for(let i=0;i<cars.length;i++)
{
  
  prixVente+=cars[i].sellPrice;
}
console.log(prixVente);








