/*Example sum n numbers the square*/

var numbersSquare = createListNumbersSquare(5);

function createListNumbersSquare(lengthNumber){
    numbers = [];
    for(i=1; i< lengthNumber; i++){
        let numSquare = Math.pow(i,2);
        console.log("number: ", numSquare);
        numbers.push(numSquare);
    }
    return numbers;

}

var sum = numbers.reduce(function(a, b){
    return a + b;
});
console.log("Sum: ",sum);