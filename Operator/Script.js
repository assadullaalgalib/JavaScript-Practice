// Arithmetic Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.33
console.log("Modulus:", a % b);         // 1
console.log("Exponentiation:", a ** b); // 1000

//  Increment and Decrement
a++; // a = 11
b--; // b = 2
console.log("Incremented a:", a);
console.log("Decremented b:", b);

//  Assignment Operators
let x = 5;
x += 2; // x = 7
x *= 3; // x = 21
console.log("Final x:", x);

//  Comparison Operators
let age = 18;
console.log("==:", age == "18");     // true (value only)
console.log("===:", age === "18");   // false (type check)
console.log("!=:", age != 20);       // true
console.log("!==:", age !== "18");   // true
console.log(">:", age > 15);         // true
console.log("<=:", age <= 18);       // true

//  Logical Operators
let hasLicense = true;
let hasCar = false;
console.log("AND (&&):", hasLicense && hasCar); // false
console.log("OR (||):", hasLicense || hasCar);  // true
console.log("NOT (!):", !hasCar);               // true

//  Ternary Operator
let marks = 70;
let result = (marks >= 40) ? "Pass" : "Fail";
console.log("Result:", result); // Pass

//  if Statement
let temp = 30;
if (temp > 25) {
    console.log("It's warm today.");
}

//  if-else Statement
let score = 45;
if (score >= 50) {
    console.log("You passed!");
} else {
    console.log("You failed.");
}

//  else-if Statement (Grading System)
let grade = 82;
if (grade >= 90) {
    console.log("Grade: A");
} else if (grade >= 80) {
    console.log("Grade: B");
} else if (grade >= 70) {
    console.log("Grade: C");
} else if (grade >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
