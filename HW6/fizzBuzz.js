/*
* Homework Assignment #6: Loops
*/

// Check if val is prime
const isPrime = (val) => {
  if(val === 1) return false;

  for(let i = 2; i <= val / 2; i++) {
    if(val % i === 0)
      return false;
  }
  return true;
}

for(let i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0)
    console.log("FizzBuzz");
  else if(i % 3 === 0)
    console.log("Fizz");
  else if(i % 5 === 0)
    console.log("Buzz");
  else
    console.log(i);

  if(isPrime(i))
    console.log("Prime");

  console.log("");
}
