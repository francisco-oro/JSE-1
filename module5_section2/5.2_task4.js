// Task 4
// Callback functions
let add = (a, b) => (Number.isInteger(a) === false || Number.isInteger(b) === false) ? NaN: a + b;
let sub = (a, b) => (Number.isInteger(a) === false || Number.isInteger(b) === false) ? NaN: a - b;
let mult = (a, b) => (Number.isInteger(a) === false || Number.isInteger(b) === false) ? NaN: a * b;
// Action function
function action(callback, a, b){
    return callback(a, b);
}
// Displaying the results in the console
console.log(action(add, 12, 10)); 
console.log(action(sub, 12, 10));
console.log(action(mult, 10, 10.1)); 