let result;
while(true){
    let number1 = prompt('Input a number or input "Q" to stop the process:');
    if(number1 == 'Q'){
        break;
    }
    let number2 = prompt('Input another number:');
    if(number2 == 'Q'){
        break;
    }
    let operation = prompt('Input an operation to perform on these numbers: ');
    if(operation == 'Q'){
        break;
    }
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
}