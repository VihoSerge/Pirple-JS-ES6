/*
* Homework Assignment #4: Functions
*/


// Declare a constructor for men
function Men(name) {
  this.name = name;
}

// Define all possible mortal men
const mortalMenList = [
  new Men('men0'),
  new Men('men1'),
  new Men('men2'),
  new Men('men3'),
  new Men('men4'),
  new Men('men5'),
  new Men('men6'),
  new Men('men7'),
]

// Function to check if men name pass in param is mortal
const isMortal = (name) => {
  if(typeof name !== 'string')
    return false;

  for(const i in mortalMenList) {
    if(mortalMenList[i].name === name)
      return true;
  }

  return false;
}

// Test

console.log(isMortal(5));
console.log(isMortal("me5"));
console.log(isMortal("men5"));


// Cake example

const cakeFlavor = (cakes, isChocolate) => {
  return isChocolate ? "This is choclate flavoured cake " : "This is vanilla flavoured cake ";
}
