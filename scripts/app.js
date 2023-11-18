// const userInput = document.getElementById("input-number");
// const addBtn = document.getElementById("btn-add");
// const subtractBtn = document.getElementById("btn-subtract");
// const multiplyBtn = document.getElementById("btn-multiply");
// const divideBtn = document.getElementById("btn-divide");
// const currentResultOutput = document.getElementById("current-result");
// const currentCalculationOutput = document.getElementById("current-calculation");

// let calcObject = {
//     num1: 0,
//     num2: 0,
//     total: 0,
//     operator: "",
//     calcDescription: "",
// };

// function getUserInput(operator) {
//     if (userInput.value === "") {
//         alert("Please enter a number");
//         userInput.focus();
//         return;
//     } else calcObject.num2 = parseInt(userInput.value);
//     createCalcObj(operator);
// }

// function createCalcObj(operator) {
//     calcObject.num1 = calcObject.total;
//     calcObject.operator = operator;
//     calcObject.total = calc();
//     calcObject.calcDescription = calcDescription();
//     logAndOutputResults();
// }

// function calc() {
//     if (calcObject.operator === "+") {
//         return calcObject.num1 + calcObject.num2;
//     } else if (calcObject.operator === "-") {
//         return calcObject.num1 - calcObject.num2;
//     } else if (calcObject.operator === "*") {
//         return calcObject.num1 * calcObject.num2;
//     } else if (calcObject.operator === "/") {
//         return calcObject.num1 / calcObject.num2;
//     }
// }

// function calcDescription() {
//     return (
//         calcObject.num1 +
//         " " +
//         calcObject.operator +
//         " " +
//         calcObject.num2 +
//         " = " +
//         calcObject.total
//     );
// }

// /**
//  * Updates the result and calculation description in the DOM.
//  * @param {number} result - The result of the calculation.
//  * @param {string} text - The calculation description.
//  */
// function outputResult(result, text) {
//     currentResultOutput.textContent = result;
//     currentCalculationOutput.textContent = text;
// }

// function logAndOutputResults() {
//     outputResult(calcObject.total, calcObject.calcDescription);
//     console.log(calcObject);
// }

// function add() {
//     getUserInput("+");
// }
// function subtract() {
//     getUserInput("-");
// }
// function multiply() {
//     getUserInput("*");
// }
// function divide() {
//     getUserInput("/");
// }

// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);

// Get references to HTML elements
const userInput = document.getElementById("input-number");
const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

// Object to store calculator data
let calcObject = {
    num1: 0,
    num2: 0,
    total: 0,
    operator: "",
    calcDescription: "",
};

// Function to handle user input
function getUserInput(operator) {
    const inputValue = userInput.value;

    // Check if the input is empty
    if (inputValue === "") {
        alert("Please enter a number");
        userInput.focus();
    } else {
        // Parse the input value and update calcObject
        calcObject.num2 = parseInt(inputValue);
        // Create the calculation object and update the result
        createCalcObj(operator);
    }
}

// Function to create the calculation object
function createCalcObj(operator) {
    // Update num1 and operator in calcObject
    calcObject.num1 = calcObject.total;
    calcObject.operator = operator;
    // Perform the calculation and update calcObject
    calcObject.total = calc();
    calcObject.calcDescription = calcDescription();
    // Log and output the results to the DOM
    logAndOutputResults();
}

// Function to perform the calculation based on the operator
function calc() {
    const { num1, num2, operator } = calcObject;
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return num1;
    }
}

// Function to generate the calculation description
function calcDescription() {
    const { num1, operator, num2, total } = calcObject;
    return `${num1} ${operator} ${num2} = ${total}`;
}

// Function to update the result in the DOM
function outputResult() {
    currentResultOutput.textContent = calcObject.total;
    currentCalculationOutput.textContent = calcObject.calcDescription;
}

// Function to log and output the results
function logAndOutputResults() {
    // Update the DOM with the calculation results
    outputResult();
    // Log the entire calcObject to the console
    console.log(calcObject);
}

// Function to handle button clicks and perform the corresponding operation
function performOperation(operator) {
    getUserInput(operator);
}

// Event listeners for each operation button
document
    .getElementById("btn-add")
    .addEventListener("click", () => performOperation("+"));
document
    .getElementById("btn-subtract")
    .addEventListener("click", () => performOperation("-"));
document
    .getElementById("btn-multiply")
    .addEventListener("click", () => performOperation("*"));
document
    .getElementById("btn-divide")
    .addEventListener("click", () => performOperation("/"));
