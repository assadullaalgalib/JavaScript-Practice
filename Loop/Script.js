// JavaScript Loops - All in One Example

//  for loop
console.log("🔹 for loop: Print 1 to 5");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2while loop
console.log("🔹 while loop: Print 1 to 5");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// do...while loop
console.log("🔹 do...while loop: Print 1 to 5");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// for...of loop (used for arrays)
console.log(" for...of loop: Loop through array");
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

// for...in loop (used for objects)
console.log(" for...in loop: Loop through object");
let student = {
    name: "Rahul",
    age: 20,
    grade: "A"
};
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// break statement in loop
console.log(" break: Stop loop when i == 3");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// continue statement in loop
console.log(" continue: Skip i == 3");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; 
    }
    console.log(i);
}
