function add(a, b){
    if(Number.isInteger(a) === false || Number.isInteger(b) === false){
        return NaN;
    }
    return a + b;
}
function sub(a, b){
    if(Number.isInteger(a) === false || Number.isInteger(b) === false) {
        return NaN;
    }
    return a - b;
}
function mult(a, b){
    if(Number.isInteger(a) === false || Number.isInteger(b) === false) {
        return NaN;
    }
    return a * b;
}
console.log(add(12, 10));
console.log(mult(12, 10.1));