let fibbRec = function(n){
    return (n > 2 ) ? fibbRec(n - 1) + fibbRec(n - 2) : 1;
}
console.log(fibbRec(4));
console.log(fibbRec(7));