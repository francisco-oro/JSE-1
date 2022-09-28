// Conditional - Tasks: Task 3 
let result
let number1 = Number(prompt('Input a number:'));
let number2 = Number(prompt('Input another number:'));
let operation = prompt('Input an operation to perform on these numbers: ');
if (!Number.isNaN(number1)){
    if (!Number.isNaN(number2)){
        switch(operation){
            case '+':
                result = number1 + number2;
                alert(result);
                break;
            case '-':
                result = number1 - number2;
                alert(result);
                break;
            case '*':
                result = number1 * number2;
                alert(result);
                break;
            case '/':
                result = number1 / number2;
                alert(result);
                break;
            default:
                alert("Unknown operand");
        }
    } else { 
        alert("An error has occured");
    }
} else { 
    alert("An error has occured");
}