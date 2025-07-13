// Function Example 1: Addition function
function add(a, b) {
return a + b;
}
let result = add(10, 20);
console.log("Sum:", result);

// Function Example 2: Average calculation function
function calculateAverage(marks) {
let sum = 0;
for (let i = 0; i < marks.length; i++) {
sum += marks[i];
}
return sum/marks.length;
}

let scores = [80, 90, 75, 85];
let average = calculateAverage(scores);
console.log("Average Marks:", average);

// Function Example 3: Greeting function
function greet(name) {
console.log("Hello, " + name + "!");
}
greet("Galib");

// Function Example 4: Multiplication function
function mul(x, y) {
return x * y;
}
console.log(mul(5, 3));

// Function Example 5: Array sum inside function
function sumArray(arr) {
let total = 0;
for (let num of arr) {
total += num;
}
return total;
}
console.log(sumArray([10, 20, 30]));

// Function Example 6: Default parameter
function greetWithDefault(name = "Student") {
console.log("Hello, " + name);
}
greetWithDefault();       
greetWithDefault("Rita"); 