//get output on html
let output = document.querySelector("#output");

//create variables

let firstNumber = 0;
let operation = null;
let resetAfterOperation = false;

//getting the number when click it should provide a value
document.querySelectorAll("#calculator .number").forEach((button) => {
  button.addEventListener("click", (event) => {
    let value = event.target.textContent;
    if (resetAfterOperation) {
      output.value = value;
      resetAfterOperation = false;
    } else {
      output.value += value;
    }
  });
});

//getting the operation
document.querySelectorAll("#calculator .operation").forEach((button) => {
  button.addEventListener("click", (event) => {
    firstNumber = Number.parseInt(output.value); // ===> Number.parseInt() -- a method that parses a string argument and returns and integer
    operation = event.currentTarget.dataset.action; // ==> dataset.action is the html element in this case data-action that is located in the button.
    resetAfterOperation = true;
  });
});

const equal = document.querySelector("#calculator .equal");
equal.addEventListener("click", () => {
  if (!operation) {
    return;
  }
  resetAfterOperation = true;
  let secondNumber = Number.parseInt(output.value, 10);
  output.value = run(operation, firstNumber, secondNumber);

  //reset operation
  operation = null;
});

//creating a function for the operation

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function sum(a, b) {
  return a + b;
}

function run(operation, x, y) {
  if (operation === "divide") {
    return divide(x, y);
  }
  if (operation === "multiply") {
    return multiply(x, y);
  }
  if (operation === "subtract") {
    return subtract(x, y);
  }
  if (operation === "sum") {
    return sum(x, y);
  }
}
