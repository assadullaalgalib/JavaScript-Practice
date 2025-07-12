// let mark = [90, 85, 78, 92, 88];
// let sum = 0;

// for (let i = 0; i < mark.length; i++) {
//     sum += mark[i];
// }

// let average = sum / mark.length;
// console.log("Average Mark:", average);




// question 2 

let items = [250, 150, 300, 200, 100];

for (let val of items) {
    let offer = 0.1 * val; 
    let discountedPrice = val - offer;
    console.log("Item Price after 10% discount:", discountedPrice);
}
