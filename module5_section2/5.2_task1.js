// Task 1 - Section "A"
let numbers = [50, 10, 40, 30, 20];    
let sorted = numbers.sort((a, b) => a - b);
console.log(sorted);
// Task 1 - Section "B"
let reverseSorted = numbers.sort((a, b) => (a - b < 0) ? 1 : -1);
console.log(reverseSorted);