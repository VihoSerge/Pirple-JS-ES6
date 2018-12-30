/**
* Homework Assignment #2: Variables and Constants
* In this assignment I explain the differences between var, let and const
*/


/*
* VAR
* var declarations are globally scoped or function/locally scoped.
* It is globally scoped when a var variable is declared outside a function.
* This means that any variable that is declared with var outside a function block is available for use in the
* whole window. var is function scoped when it is declared within a function. This means that it is available
* and can be accessed only within that function.
* it is therefore advisable to use var when you want to have an global scope
* var variables can be re-declared and updated
*/

// var example
var myName = "Viho"

function sayHi() {
  //myName is valid in this block
  var age = 19;
  console.log("Hi " + myName);
  if(age >= 18) {
    var weight = 60;
  }
  console.log("Weight " + weight); // valid
}

console.log("Age " + age); // error because no longer valid outside the function sayHi()

sayHi();

/*
* LET
* let is a novelty of es2015
* let is like var but with a block scope
* let is preferred for variable declaration now
* let can be updated but not re-declared.
*/

let height = 19;

if(height > 15) {
  let width = 16;
  console.log(width); // valid in this block
}
console.log(width); // width is not defined

/*
* CONST
* const, like let, is block scoped.
* const cannot be updated or re-declared (but only objects or arrays are mutable)
*/

const YEAR = 2018;

console.log(YEAR);

YEAR = 2019; // error : Assignment to constant variable.

const CAR = {
  weight : 56,
  color: 'green'
}

console.log(CAR);

CAR = {
  weight : 56,
  color: 'red',
  speed: 256
}// error : Assignment to constant variable.

// But this is valid
CAR.color = "red";
CAR.speed = 5;

console.log(CAR);
