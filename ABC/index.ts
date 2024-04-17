//Q1
//let greeting; // Assign "Hello, World!" to this variable and print it.
let greeting: string = "Hello, World!";
console.log(greeting);

//Q2
//let num1, num2; // Assign integer values and perform arithmetic operations.
//Sum
let num1: number;
let num2: number;
num1 = 10;
num2 = 5;
let sum: number = num1 + num2;
console.log("Sum:", sum);

//Difference
let diff: number = num1 - num2;
console.log("Diff:", diff);

//Product
let pro: number = num1 * num2;
console.log("Pro:", pro);

//Quotient
let quo: number = num1 / num2;
console.log("Quo:", quo);

//Q3
//let a = 1,
// b = 2; // Swap these values without using a new variable.
let a = 1,
  b = 2;
[a, b] = [b, a];
console.log("a:", a);
console.log("b:", b);

//Q4
//let message: string; // Now try assigning a number to it and see what happens.
let message: string;
message = 42;
console.log(message);

//Q5
// let num3, num4; // Use the modulus operator (%) to find the remainder.
let num3: number;
let num4: number;
num1 = 10;
num2 = 3;
let remainder: number = num1 % num2;
console.log("The remainder when", num1, "is divided by", num2, "is", remainder);

//Q6
//let counter = 0; // Increment this value by 1 in two different ways.
let counter = 0;
counter = counter + 1;
console.log("Method 2:", counter);

//Q7
// Given three boolean variables, write expressions for AND, OR, and NOT gates.
// Logical AND operator (&&)
let a1 = true,
  b1 = false,
  c1 = true;
let expression1 = a1 && b1; // expression1 will be false

// Logical OR operator (||)
let expression2 = b1 || c1; // expression2 will be true

// Logical NOT operator (!)
let expression3 = !a1; // expression3 will be false

// Combining logical operators
let expression4 = (a1 && b1) || c1; // expression4 will be true

console.log("Expression 1:", expression1);
console.log("Expression 2:", expression2);
console.log("Expression 3:", expression3);
console.log("Expression 4:", expression4);

//Q8
//Show examples of using compound assignment operators.
//let num = 10; // Use +=, -=, *=, and /= on this variable.
let num0: number = 10;

// Using +=
num0 += 5; // equivalent to num = num + 5
console.log("After +=:", num0); // Output: 15

// Using -=
num0 -= 3; // equivalent to num = num - 3
console.log("After -=:", num0); // Output: 12

// Using *=
num0 *= 2; // equivalent to num = num * 2
console.log("After *=:", num0); // Output: 24

// Using /=
num0 /= 4; // equivalent to num = num / 4
console.log("After /=:", num0); // Output: 6

//Q9
//let num; // Determine if this is even or odd.
let num: number;
num = 5;
if (num % 2 === 0) {
  console.log(num + " is even.");
} else {
  console.log(num + " is odd.");
}

//Q10
//let age; // Check if age is 18 or older to determine voting eligibility.
let age: number;
age = 21;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote yet.");
}

//Q11
//let score; // Use conditionals to assign and print grades A, B, C, D, or F.
let score: number;
score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

//Q12
//let x, y, z; // Determine the largest among these.
let x: number, y: number, z: number;
x = 10;
y = 5;
z = 8;
if (x >= y && x >= z) {
  console.log("x is the largest:", x);
} else if (y >= x && y >= z) {
  console.log("y is the largest:", y);
} else {
  console.log("z is the largest:", z);
}

//Q13
//let year; // Determine if this is a leap year.
let year: number;
year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

//Q14
//let fahrenheit; // Convert this to Celsius and print the result.
let fahrenheit: number;
fahrenheit = 32;
let celsius: number = (fahrenheit - 32) / 1.8;
console.log(
  fahrenheit +
    " degrees Fahrenheit is equal to " +
    celsius +
    " degrees Celsius."
);

//Q15
//let number; // Determine the sign of this number.
let number: number;
number = -5;
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//Q16
//let number; // Print the multiplication table for this number up to 10.
let number1: number;

// Assume number is assigned a value, for example:
number1 = 5;

console.log("Multiplication table for", number1 + ":");

for (let i = 1; i <= 10; i++) {
  let result = number1 * i;
  console.log(number1 + " * " + i + " = " + result);
}
