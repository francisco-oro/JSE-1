// Task 2
let firstNumber = prompt("Ipunt the first number:");
let lastNumber = prompt("Input the last number:");
for(let i = firstNumber ; i >= lastNumber; i-=10){
    console.log(i);
    if (firstNumber < lastNumber){
        console.log("The first number must be bigger than the last number");
        break;
    }
}