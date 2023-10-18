const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");
let currentResult = 0;

let logEntries = [];

/**
 * Updates the result and calculation description in the DOM.
 * @param {number} result - The result of the calculation.
 * @param {string} text - The calculation description.
 */
function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

/**
 * Parses the user input and returns a number.
 * @returns {number} The user input as a number.
 */
function getUserInput() {
    return parseInt(userInput.value);
}

/**
 * Creates a calculation description based on the current result, operator, and entered number.
 * @param {number} currentResultValue - The current result.
 * @param {string} operator - The operator used in the calculation.
 * @param {number} enteredNumberValue - The number entered by the user.
 * @returns {string} The calculation description.
 */
function createAndWriteOutput(
    initialResultValue,
    operator,
    enteredNumberValue
) {
    logEntries.push(
        initialResultValue +
            " " +
            operator +
            " " +
            enteredNumberValue +
            " = " +
            currentResult
    );
    console.log(logEntries);
    return `${initialResultValue} ${operator} ${enteredNumberValue} `;
}

/**
 * Performs addition and updates the result and calculation description.
 */
function add() {
    const enteredNumber = getUserInput();
    let initialResult = currentResult;

    currentResult += enteredNumber;

    const calcDescription = createAndWriteOutput(
        initialResult,
        "+",
        enteredNumber
    );
    outputResult(currentResult, calcDescription);
}

/**
 * Performs subtraction and updates the result and calculation description.
 */
function subtract() {
    const enteredNumber = getUserInput();
    let initialResult = currentResult;

    currentResult -= enteredNumber;

    const calcDescription = createAndWriteOutput(
        initialResult,
        "-",
        enteredNumber
    );

    outputResult(currentResult, calcDescription);
}

/**
 * Performs multiplication and updates the result and calculation description.
 */
function multiply() {
    const enteredNumber = getUserInput();
    let initialResult = currentResult;

    currentResult *= enteredNumber;
    const calcDescription = createAndWriteOutput(
        initialResult,
        "*",
        enteredNumber
    );

    outputResult(currentResult, calcDescription);
}

/**
 * Performs division and updates the result and calculation description.
 */
function divide() {
    const enteredNumber = getUserInput();
    let initialResult = currentResult;

    currentResult /= enteredNumber;
    const calcDescription = createAndWriteOutput(
        initialResult,
        "/",
        enteredNumber
    );

    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
