// Task 8
function FibRecc(n){
    let a = 0, b = 1;
    for(let i = 2; i <= n; i++){
        let c = a;
        a = b;
        b += c;
    }
    return b;
}
console.log(FibRecc(4));
console.log(FibRecc(7));