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
let currentCalValue = currentResult;

function add() {
    let currentCalValue = currentResult;

    currentResult = parseInt(currentResult) + parseInt(userInput.value);

    outputResult(currentResult, currentCalValue + "+" + userInput.value);
}

addBtn.addEventListener("click", add);
