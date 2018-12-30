/*
* Homework Assignment #3: Statements and Operators
*/
//use if else to prove that socrates is mortal


//Socrates example
let socrates = {
  name: 'Socrates',
  gender: 'male',
  category: 'men'
}

const MEN_CATEGORY = 'men';

if(socrates.category === MEN_CATEGORY) {
  socrates.mortality = true;
}else {
  socrates.mortality = false;
}

if(socrates.mortality) {
  console.log(socrates.name + " is mortal");
}


//Cake example

let cake = '';

if(cake !== 'chocolate') {
  cake = 'vanilla';
}

console.log("This cake is " + cake);
