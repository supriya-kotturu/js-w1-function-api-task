// TOPIC - Anonymous Functions
// WHY - used as callbacks
// DEF - A function with no name is called an anonymous function



// 1. Print odd numbers in an array
const ARRY = [35, 52, 563, 76, 557, 8, 3];
console.log(ARRY.filter((e) => e % 2 != 0));


// 2. Convert all the strings to title caps in a string array
const str = "HELLO WORLD";
let res = [];
str.split(" ").forEach((word) => {
  res.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
});
console.log(res.join(" "));


// 3. Sum of all numbers in an array
console.log(ARRY.reduce((s, e) => s + e, 0));


// 4. Return all the prime numbers in an array
const isPrime = (n) => {
  let count = 0;
  for (let i = 1; i < parseInt(n / 2); i++) {
    if (n % i == 0) {
      count++;
    }
  }
  return count == 0;
};
console.log(
  ARRY.map((e) => {
    if (isPrime(e)) {
      return e;
    }
  }).filter((e) => typeof e != "undefined")
);


// 5. Return all the palindromes in an array
const PALINDROME_ARRY = ['raceCar', 'madam', 'november']

