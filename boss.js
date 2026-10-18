
/*
Q18: validatePassword(pw)
Pseudocode:
- Create an empty errors array.
- Check the minimum length.
- Check for uppercase, lowercase, digit, and special character.
- Check that there are no spaces.
- Return an object with valid and errors.
*/
function validatePassword(pw) {
  const errors = [];

  if (pw.length < 8) {
    errors.push("Password must have at least 8 characters.");
  }

  if (!/[A-Z]/.test(pw)) {
    errors.push("Password must contain an uppercase letter.");
  }

  if (!/[a-z]/.test(pw)) {
    errors.push("Password must contain a lowercase letter.");
  }

  if (!/[0-9]/.test(pw)) {
    errors.push("Password must contain a digit.");
  }

  if (!/[!@#$%^&*]/.test(pw)) {
    errors.push("Password must contain a special character (!@#$%^&*).");
  }

  if (/\s/.test(pw)) {
    errors.push("Password must not contain spaces.");
  }

  return {
    valid: errors.length === 0,
    errors: errors
  };
}

console.log(validatePassword("Hello123!"));
console.log(validatePassword("hello"));
console.log(validatePassword("Hello 123!"));

/*
Q19: romanNumeral(n)
Pseudocode:
- Match each value with its Roman numeral.
- Start with the largest value.
- While the number is at least that value, add its numeral.
- Subtract the value and continue.
- Return the result.
*/
function romanNumeral(n) {
  if (!Number.isInteger(n) || n < 1 || n > 3999) {
    return "Invalid";
  }

  const values = [
    1000, 900, 500, 400, 100, 90, 50, 40,
    10, 9, 5, 4, 1
  ];

  const symbols = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL",
    "X", "IX", "V", "IV", "I"
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (n >= values[i]) {
      result += symbols[i];
      n -= values[i];
    }
  }

  return result;
}

console.log(romanNumeral(1994)); // MCMXCIV
console.log(romanNumeral(2026)); // MMXXVI
console.log(romanNumeral(0)); // Invalid

/*
Q20: nationalIdCheck(id)
Pseudocode:
- Check that the ID contains exactly 16 digits.
- Check that the first digit is 1.
- Read digits 2 to 5 as the birth year.
- Check that the year is between 1900 and the current year.
- Check that the sixth digit is 7 or 8.
- Return true if all checks pass.
- Otherwise, return the first error message.
*/
function nationalIdCheck(id) {
  if (!/^\d{16}$/.test(id)) {
    return "ID must contain exactly 16 digits.";
  }

  if (id[0] !== "1") {
    return "The first digit must be 1.";
  }

  const birthYear = Number(id.slice(1, 5));
  const currentYear = new Date().getFullYear();

  if (birthYear < 1900 || birthYear > currentYear) {
    return "Birth year must be between 1900 and " + currentYear + ".";
  }

  if (id[5] !== "7" && id[5] !== "8") {
    return "The sixth digit must be 7 or 8.";
  }

  return true;
}

console.log(nationalIdCheck("1200071234567890"));
console.log(nationalIdCheck("2200071234567890"));
console.log(nationalIdCheck("123"));
