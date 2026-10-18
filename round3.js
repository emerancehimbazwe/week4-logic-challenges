
/*
Q13: sumTo(n)
Pseudocode:
- Start sum at 0.
- Loop from 1 to n.
- Add each number to sum.
- Return sum.

Comparison:
- A loop is easy to understand.
- The formula n * (n + 1) / 2 is shorter and faster.
*/
function sumTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumTo(5)); // 15
console.log(sumTo(10)); // 55
console.log(sumTo(0)); // 0

// Alternative solution using a formula
function sumToFormula(n) {
  return n * (n + 1) / 2;
}

console.log(sumToFormula(5)); // 15

/*
Q14: isPrime(n)
Pseudocode:
- If n is less than 2, return false.
- Check divisors from 2 up to the square root of n.
- If a divisor divides n exactly, return false.
- Otherwise, return true.
*/
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(1)); // false

/*
Q15: printPyramid(rows)
Pseudocode:
- Loop through each row.
- Print the required leading spaces.
- Print an odd number of stars for each row.
- Continue until all rows are printed.
*/
function printPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = "";
    let stars = "";

    for (let j = 1; j <= rows - i; j++) {
      spaces += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      stars += "*";
    }

    console.log(spaces + stars);
  }
}

printPyramid(4);
printPyramid(1);
printPyramid(0);

/*
Q16: fibonacci(n)
Pseudocode:
- If n is zero or negative, return an empty string.
- Start with the numbers 0 and 1.
- Add each number to the result.
- Calculate the next number by adding the previous two.
- Return the numbers separated by commas.
*/
function fibonacci(n) {
  if (n <= 0) return "";

  let result = [];
  let first = 0;
  let second = 1;

  for (let i = 0; i < n; i++) {
    result.push(first);

    const next = first + second;
    first = second;
    second = next;
  }

  return result.join(", ");
}

console.log(fibonacci(8)); // "0, 1, 1, 2, 3, 5, 8, 13"
console.log(fibonacci(2)); // "0, 1"
console.log(fibonacci(0)); // ""

/*
Q17: guessingGameSimulator(secret)
Pseudocode:
- Set the lowest possible guess to 1 and highest to 100.
- Guess the middle number.
- Log each guess.
- If the guess is too low, move the lower limit up.
- If too high, move the upper limit down.
- Stop when the guess matches the secret.
- Return the number of guesses.
*/
function guessingGameSimulator(secret) {
  if (!Number.isInteger(secret) || secret < 1 || secret > 100) {
    return "Invalid";
  }

  let low = 1;
  let high = 100;
  let guesses = 0;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    guesses++;

    console.log("Guess:", middle);

    if (middle === secret) {
      return guesses;
    } else if (middle < secret) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return guesses;
}

console.log("Guesses needed:", guessingGameSimulator(50));
console.log("Guesses needed:", guessingGameSimulator(1));
console.log("Guesses needed:", guessingGameSimulator(100));
