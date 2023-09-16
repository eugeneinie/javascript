// Get an input number
var inputNum = prompt ("Type a number between 1 and 10");

//if valid, display its square
if (inputNum >= 1 && inputNum <= 10) {
    document.write ("The square of " + inputNum + " is " + inputNum*inputNum);
} else {
    document.write ("invalid number!");
}