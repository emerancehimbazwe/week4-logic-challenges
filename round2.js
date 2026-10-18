
/*
Q6: reverseString(str)
Pseudocode:
- Create an empty string.
- Loop backward through the input.
- Add each character to the new string.
- Return the new string.
*/
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("Kigali")); // "ilagiK"
console.log(reverseString("")); // ""

/*
Q7: countChar(str, char)
Pseudocode:
- Convert both inputs to lowercase.
- Loop through the string.
- Count matching characters.
- Return the count.
*/
function countChar(str, char) {
  let count = 0;
  str = str.toLowerCase();
  char = char.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }

  return count;
}

console.log(countChar("Banana", "a")); // 3
console.log(countChar("Hello", "L")); // 2
console.log(countChar("hello", "z")); // 0

/*
Q8: isPalindrome(str)
Pseudocode:
- Convert the string to lowercase.
- Remove spaces and punctuation.
- Compare characters from both ends.
- Return false if they differ; otherwise true.
*/
function isPalindrome(str) {
  let cleaned = "";

  for (let i = 0; i < str.length; i++) {
    const code = str.toLowerCase().charCodeAt(i);

    if (
      (code >= 97 && code <= 122) ||
      (code >= 48 && code <= 57)
    ) {
      cleaned += str.toLowerCase()[i];
    }
  }

  for (let i = 0; i < Math.floor(cleaned.length / 2); i++) {
    if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("Never odd or even")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("")); // true

/*
Q9: titleCase(str)
Pseudocode:
- Build a result string.
- Capitalize the first letter and letters after spaces.
- Make other letters lowercase.
- Return the result.
*/
function titleCase(str) {
  let result = "";
  let newWord = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += str[i];
      newWord = true;
    } else {
      if (newWord) {
        result += str[i].toUpperCase();
      } else {
        result += str[i].toLowerCase();
      }

      newWord = false;
    }
  }

  return result;
}

console.log(titleCase("welcome to kigali tech hub"));
console.log(titleCase("HELLO WORLD"));
console.log(titleCase("")); // ""

/*
Q10: maskPhone(phone)
Pseudocode:
- Check that the phone has 10 digits and starts with 07.
- If invalid, return "Invalid".
- Keep the first 3 and last 3 digits.
- Replace the middle 4 digits with asterisks.
*/
function maskPhone(phone) {
  if (!/^07\d{8}$/.test(phone)) return "Invalid";

  return phone.slice(0, 3) + "****" + phone.slice(7);
}

console.log(maskPhone("0788123456")); // "078****456"
console.log(maskPhone("0712345678")); // "071****678"
console.log(maskPhone("123")); // "Invalid"

/*
Q11: longestWord(sentence)
Pseudocode:
- Split the sentence into words.
- Start with the first word as the longest.
- Check each remaining word.
- Replace the longest only when a longer word is found.
- Return the longest word.
*/
function longestWord(sentence) {
  const words = sentence.match(/\b[\w']+\b/g);

  if (!words || words.length === 0) return "";

  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(longestWord("I love JavaScript")); // "JavaScript"
console.log(longestWord("cat dog fish")); // "fish"
console.log(longestWord("")); // ""

/*
Q12: compress(str)
Pseudocode:
- Start with an empty result.
- Count consecutive matching characters.
- Add each character and its count to the result.
- Return the result.
*/
function compress(str) {
  if (str.length === 0) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  return result;
}

console.log(compress("aaabccdddd")); // "a3b1c2d4"
console.log(compress("abcd")); // "a1b1c1d1"
console.log(compress("")); // ""
