// TOPIC - Anonymous Functions
// WHY - used as callbacks
// DEF - A function with no name is called an anonymous function

// TOPIC - IIFE - Immediately Invoked Function Expressions
// WHY - used  to create private scope and private data
//     - to create async scope, on a global level for await functions
// DEF - A function which immediately invokes itself is an IIFE



(() => {

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
  const PALINDROME_ARRY = ["raceCar", "madam", "november"];
  res = [];

  const isPalindrome = (word) => {
    return (
      word.toLowerCase() == word.toLowerCase().split("").reverse().join("")
    );
  };

  for (let word of PALINDROME_ARRY) {
    isPalindrome(word) ? res.push(word) : null;
  }
  console.log(res);

  // 6. Return median of two sorted arrays of same size
  const arry1 = [2, 5, 7, 8, 11, 23],
  arry2 = [5, 6, 32, 45, 67, 87];
  console.log('median')
  arry1.push(...arry2)
  console.log(arry1.sort((a,b)=>a-b)[parseInt(arry1.length /2)])

  // 7. Remove duplicates from an array
  let arryWithDuplicates = [3, 42, 2, 4, 42, 4545, 555, 4, 4, 2, 2, 42, 42];
  console.log([...new Set(arryWithDuplicates)]);

  // 8. Rotate an array by k times and return the rotated array.
  let k = 3;
  res = []
  for(let i =  0 ; i < k;i++){
    arry1.unshift(arry1.pop())
  }
  console.log(arry1)

})();
