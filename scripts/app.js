const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
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
    if (userInput.value === "") {
        alert("Please enter a number");
        userInput.focus();
        return;
    } else calcObject.num2 = parseInt(userInput.value);
    createCalcObj(operator);
}

function createCalcObj(operator) {
    calcObject.num1 = calcObject.total;
    calcObject.operator = operator;
    calcObject.total = calc();
    calcObject.calcDescription = calcDescription();
    logAndOutputResults();
}

function calc() {
    if (calcObject.operator === "+") {
        return calcObject.num1 + calcObject.num2;
    } else if (calcObject.operator === "-") {
        return calcObject.num1 - calcObject.num2;
    } else if (calcObject.operator === "*") {
        return calcObject.num1 * calcObject.num2;
    } else if (calcObject.operator === "/") {
        return calcObject.num1 / calcObject.num2;
    }
}

function calcDescription() {
    return (
        calcObject.num1 +
        " " +
        calcObject.operator +
        " " +
        calcObject.num2 +
        " = " +
        calcObject.total
    );
}

/**
 * Updates the result and calculation description in the DOM.
 * @param {number} result - The result of the calculation.
 * @param {string} text - The calculation description.
 */
function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

function logAndOutputResults() {
    outputResult(calcObject.total, calcObject.calcDescription);
    console.log(calcObject);
}

function add() {
    getUserInput("+");
}
function subtract() {
    getUserInput("-");
}
function multiply() {
    getUserInput("*");
}
function divide() {
    getUserInput("/");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
