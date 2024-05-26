let currentNumber = "";
let previousNumber = "";
let operation = "";

function dis(num) {
  currentNumber += num;
  document.getElementById("results").value = currentNumber;
}

function clr() {
  currentNumber = "";
  previousNumber = "";
  operation = "";
  document.getElementById("results").value = "";
}

function setOperation(op) {
  if (currentNumber === "") return;
  if (operation !== "") {
    solve();
  }
  previousNumber = currentNumber;
  currentNumber = "";
  operation = op;
  document.getElementById("results").value = op;
}

function solve() {
  if (operation === "" || currentNumber === "") return;

  let result = 0;
  switch (operation) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      if (parseFloat(currentNumber) === 0) {
        alert("Error: Division by zero is not allowed!");
        clr();
        return;
      }
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }

  currentNumber = result.toString();
  previousNumber = "";
  operation = "";
  document.getElementById("results").value = result;
}
