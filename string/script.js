//  JavaScript Strings - Full Overview

//  Declaring strings
let str1 = "Hello";
let str2 = 'World';
let str3 = `JS`;

console.log("String 1:", str1);
console.log("String 2:", str2);
console.log("String 3:", str3);

//  String concatenation
let fullStr = str1 + " " + str2;
console.log("Concatenated string:", fullStr);

//  Template literals (ES6+)
let name = "Apna College";
let msg = `Welcome to ${name}!`;
console.log("Template literal:", msg);

// String length
console.log("Length of fullStr:", fullStr.length);

//  Accessing characters
console.log("First character:", str1[0]); // H
console.log("Last character:", str1[str1.length - 1]); // o

//  String methods

let sample = "  JavaScript is Fun!  ";

//  toUpperCase()
console.log("Uppercase:", sample.toUpperCase());

//toLowerCase()
console.log("Lowercase:", sample.toLowerCase());

// trim() - removes extra spaces
console.log("Trimmed:", sample.trim());

//slice(start, end)
console.log("Slice (0 to 10):", sample.slice(0, 10));

//  includes(substring)
console.log("Includes 'is':", sample.includes("is")); // true

// indexOf(substring)
console.log("Index of 'Script':", sample.indexOf("Script")); // 5

// replace(old, new)
console.log("Replace 'Fun' with 'Awesome':", sample.replace("Fun", "Awesome"));

//  split(" ") → splits string into array
let words = sample.trim().split(" ");
console.log("Split into words:", words);

//  repeat(n)
console.log("Repeat 3x:", str1.repeat(3)); // HelloHelloHello

// startsWith(), endsWith()
console.log("Starts with 'Java':", sample.trim().startsWith("Java")); // true
console.log("Ends with '!':", sample.trim().endsWith("!")); // true

