// Task 3
let add = (a, b) => (Number.isInteger(a) === false || Number.isInteger(b) === false) ? NaN: a + b;
let sub = (a, b) => (Number.isInteger(a) === false || Number.isInteger(b) === false) ? NaN: a - b;
let mult = (a, b) => (Number.isInteger(a) === false || Number.isInteger(b) === false) ? NaN: a * b;
console.log(sub(12,10));
console.log(mult(10, 10.1));