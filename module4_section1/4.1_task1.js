let message;
let number = prompt("Input a number: ");
if (number > 90 && number < 110){
    message = "Bingo!";
    alert(message);
} else {
    message = "Miss";
    alert(message);
}