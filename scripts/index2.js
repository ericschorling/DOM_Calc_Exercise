'use strict'

const input = document.getElementById('input'),
    numbers = document.querySelectorAll('.numbers'),
    operators = document.querySelectorAll('.operators'),
    results = document.getElementById('result'),
    clear = document.getElementById('clear');

let resultDisplay = false;

let numberOperatorArray = []

numbers.forEach(function (number)) {
    number.addEventListener("click", function () {
        input.innerHTML += this.value;
        numberOperatorArray = [...numberOperatorArray, this.value];
        console.log(numberOperatorArray)
    });
});

operators.forEach(function (operator)) {
    operator.addEventListener("click", function () {
        input.innerHTML += this.value;
        numberOperatorArray = [...numberOperatorArray, this.value];
        console.log(numberOperatorArray)
    });
});

resultDisplay.addEventListener('click', function() {
    console.log("The number, operators array is currently:", numberOperatorArray);
    let numbersStringHolder = "";
    let equalFunctionArray = [];
    for(let char of numberOperatorArray) {
        const numReg = /\d/;
        if (numReg.test(char) || char === '.') {
            numbersStringHolder += char;
        } else {
            equalFunctionArray = [...equalFunctionArray, Number(numbersStringHolder),]
        }
        }
    }
});

clear.addEventListener('click', function() {
    input.innerHTML = "";
});
