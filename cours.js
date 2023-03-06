/*
  // Basic 9 

  let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);


// Basic 10 

// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// // EQUAL TO
// if(id == 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// GREATER OR LESS THAN
// if(id <= 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE

const color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

const name = 'Steve';
const age = 70;

// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');


//Basic 11 

const color = 'yellow';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);


//Basic 12 

// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
    // if(typeof firstName === 'undefined'){firstName = 'John'}
    // if(typeof lastName === 'undefined'){lastName = 'Doe'}
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
  }
  
  // console.log(greet());
  
  // FUNCTION EXPRESIONS
  
  const square = function(x = 3){
    return x*x;
  };
  
  // console.log(square());
  
  // IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
  
  // (function(){
  //   console.log('IIFE Ran..');
  // })();
  
  // (function(name){
  //   console.log('Hello '+ name);
  // })('Brad');
  
  // PROPERTY METHODS
  
  const todo = {
    add: function(){
      console.log('Add todo..');
    },
    edit: function(id){
      console.log(`Edit todo ${id}`);
    }
  }
  
  todo.delete = function(){
    console.log('Delete todo...');
  }
  
  todo.add();
  todo.edit(22);
  todo.delete();

  
//Basic 13 

// FOR LOOP

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('Number '+ i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP
// const users  = [
//   {id: 1, name:'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);


// FOR IN LOOP
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}


// Basic 14 

// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true) {
//    Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// for(var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

console.log('Global Scope: ', a, b, c);


*/