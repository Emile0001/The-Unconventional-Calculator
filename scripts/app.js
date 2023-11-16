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

const userInput = document.getElementById("input-number");
const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

let calcObject = {
    num1: 0,
    num2: 0,
    total: 0,
    operator: "",
    calcDescription: "",
};

function getUserInput(operator) {
    const inputValue = userInput.value;

    if (inputValue === "") {
        alert("Please enter a number");
        userInput.focus();
    } else {
        calcObject.num2 = parseInt(inputValue);
        createCalcObj(operator);
    }
}

function createCalcObj(operator) {
    calcObject.num1 = calcObject.total;
    calcObject.operator = operator;
    calcObject.total = calc();
    calcObject.calcDescription = calcDescription();
    logAndOutputResults();
}

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

function calcDescription() {
    const { num1, operator, num2, total } = calcObject;
    return `${num1} ${operator} ${num2} = ${total}`;
}

function outputResult() {
    currentResultOutput.textContent = calcObject.total;
    currentCalculationOutput.textContent = calcObject.calcDescription;
}

function logAndOutputResults() {
    outputResult();
    console.log(calcObject);
}

function performOperation(operator) {
    getUserInput(operator);
}

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
