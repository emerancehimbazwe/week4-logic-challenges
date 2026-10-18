# JavaScript Logic Challenges

**Course:** Advanced Frontend Web Development
**Student:** Emerance
**Technology:** JavaScript and Node.js

## Project Description

This project contains JavaScript logic challenges completed using functions, conditions, loops, and string operations. Each solution includes pseudocode and test cases.

## Challenges Completed

### Round 1 — Numbers and Conditions
- [x] Q1: `isLeapYear(year)`
- [x] Q2: `getBMICategory(weightKg, heightM)`
- [x] Q3: `motoFare(km)`
- [x] Q4: `convertSeconds(total)`
- [x] Q5: `changeMaker(amount)`

### Round 2 — Strings
- [x] Q6: `reverseString(str)`
- [x] Q7: `countChar(str, char)`
- [x] Q8: `isPalindrome(str)`
- [x] Q9: `titleCase(str)`
- [x] Q10: `maskPhone(phone)`
- [x] Q11: `longestWord(sentence)`
- [x] Q12: `compress(str)`

### Round 3 — Loops and Patterns
- [x] Q13: `sumTo(n)`
- [x] Q14: `isPrime(n)`
- [x] Q15: `printPyramid(rows)`
- [x] Q16: `fibonacci(n)`
- [x] Q17: `guessingGameSimulator(secret)`

### Boss Round
- [x] Q18: `validatePassword(pw)`
- [x] Q19: `romanNumeral(n)`
- [x] Q20: `nationalIdCheck(id)`

## Leaderboard Points

- Round 1: 5 points
- Round 2: 14 points
- Round 3: 15 points
- Boss Round: 15 bonus points

**Total possible leaderboard points: 49**

Note: These are the in-class leaderboard points available, not the final Classroom grade.

## Comparing Solutions

### Q13: sumTo(n)

The loop solution is easy to understand because it adds one number at a time. The formula `n * (n + 1) / 2` is shorter and more efficient for large numbers.

### Q14: isPrime(n)

Checking divisors only up to `Math.sqrt(n)` is faster than checking every number up to `n - 1`, while still correctly identifying prime numbers.

## Debugging Reflection

One bug I investigated was making sure that `compress(str)` counts only consecutive matching characters. I tested strings with repeated characters, different consecutive characters, and an empty string to check the result.

## How to Run

Run each challenge file using Node.js:

- `node round1.js`
- `node round2.js`
- `node round3.js`
- `node boss.js`

## Repository

GitHub: https://github.com/emerancehimbazwe/week4-logic-challenges
