
/*
Q1: isLeapYear(year)
Pseudocode:
- If divisible by 400, return true.
- If divisible by 100, return false.
- If divisible by 4, return true.
- Otherwise, return false.
*/
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true

/*
Q2: getBMICategory(weightKg, heightM)
Pseudocode:
- If height is zero or negative, return Invalid.
- Calculate BMI = weight / (height * height).
- Return the category matching the BMI.
*/
function getBMICategory(weightKg, heightM) {
  if (heightM <= 0) return "Invalid";

  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

console.log(getBMICategory(50, 1.7));
console.log(getBMICategory(70, 1.7));
console.log(getBMICategory(70, 0)); // Edge case

/*
Q3: motoFare(km)
Pseudocode:
- If distance is zero or negative, return 0.
- Charge 300 RWF for the first 2 km.
- Charge 107 RWF for each additional partial or full km.
*/
function motoFare(km) {
  if (km <= 0) return 0;
  if (km <= 2) return 300;

  return 300 + Math.ceil(km - 2) * 107;
}

console.log(motoFare(1));
console.log(motoFare(3));
console.log(motoFare(0)); // Edge case

/*
Q4: convertSeconds(total)
Pseudocode:
- Convert seconds into hours, remaining minutes, and seconds.
- Pad minutes and seconds to two digits.
- Return the formatted string.
*/
function convertSeconds(total) {
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return `${hours}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

console.log(convertSeconds(7509)); // 2h 05m 09s
console.log(convertSeconds(60));   // 0h 01m 00s
console.log(convertSeconds(0));    // 0h 00m 00s

/*
Q5: changeMaker(amount)
Pseudocode:
- Start with the largest denomination.
- Divide the remaining amount by that denomination.
- Record the number of pieces and keep the remainder.
- Repeat for every denomination.
*/
function changeMaker(amount) {
  const denominations = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1];

  for (let i = 0; i < denominations.length; i++) {
    const count = Math.floor(amount / denominations[i]);

    if (count > 0) {
      console.log(`${count} x ${denominations[i]} RWF`);
      amount = amount % denominations[i];
    }
  }
}

changeMaker(7385);
console.log("Zero amount:");
changeMaker(0);
console.log("Small amount:");
changeMaker(7);
