// Task 5
let counter = 1;
let timerId = setInterval(function (){
    console.log(counter++)
}, 2000);
setTimeout(function (){
    clearInterval(timerId)
}, 20000);