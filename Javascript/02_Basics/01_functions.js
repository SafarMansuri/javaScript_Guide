// Functions in js

// declaration of the function

function myfunction(){
    console.log("myfunction");
}
// myfunction // this is function referance

myfunction()  // this is function calling

// function with parameters and return values 
function addNumber(number1, number2){
    if(number1 || number2 === undefined){
        let result = number1 + number2;
        return result;
    
    }

    return "please provide a valid number"
}
let result  = addNumber(3);
console.log("result",result);