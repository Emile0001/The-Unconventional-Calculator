const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}
const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}

function add() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = parseInt(currentResult) + enteredNumber;

    return outputResult(currentResult, calcDescription);
}

function subtract() {
    const enteredNumber = getUserInput();
    const calcDescription = currentResult + " - " + enteredNumber;
    currentResult = parseInt(currentResult) - enteredNumber;
    return outputResult(currentResult, calcDescription);
}

function multiply() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} * ${enteredNumber}`;

    currentResult = parseInt(currentResult) * enteredNumber;
    return outputResult(currentResult, calcDescription);
}

function divide() {
    const enteredNumber = getUserInput();
    const calcDescription = currentResult + " / " + enteredNumber;

    currentResult = parseInt(currentResult) / enteredNumber;

    return outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
