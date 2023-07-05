const ListOfNumbers = document.querySelectorAll('.button-number');
const isEqual = document.querySelector('.button-equal');
const resultDisplay = document.getElementById('result-display');
const memoryDisplay = document.getElementById('memory-display');
const buttonC = document.querySelector('.button-C');
const buttonCE = document.querySelector('.button-CE');
const buttonBackspace = document.querySelector('.button-backspace');
const buttonPercent = document.querySelector('.button-percent');
const buttonFraction = document.querySelector('.button-fraction');
const buttonPower = document.querySelector('.button-power');
const buttonSquareRoot = document.querySelector('.button-root');
const buttonPlusMinus = document.querySelector('.button-plus-minus');
const buttonDecimal = document.querySelector('.button-decimal');
const listOfOperators = document.querySelectorAll('.button-operator');
const buttonEqual = document.querySelector('.button-equal');

let newNumber = true;
let currentOperator;
let leftOperand;
let rightOperand;

function operations(operator, leftOperand, rightOperand) {
  let result;
  if (operator == '*') {
    result = Number(leftOperand) * Number(rightOperand);
  } else if (operator == '+') {
    result = Number(leftOperand) + Number(rightOperand);
  } else if (operator == '-') {
    result = Number(leftOperand) - Number(rightOperand);
  } else {
    if (rightOperand == 0) {
      result = 'Dividing by 0!';
      memoryDisplay.value = 'Dividing by 0!';
    } else {
      result = Number(leftOperand) / Number(rightOperand);
    }
  }
  return result;
}

function fontSizing() {
  switch (resultDisplay.value.length) {
    case 11:
      resultDisplay.style.fontSize = '2.84rem';
      break;
    case 12:
      resultDisplay.style.fontSize = '2.68rem';
      break;
    case 13:
      resultDisplay.style.fontSize = '2.52rem';
      break;
    case 14:
      resultDisplay.style.fontSize = '2.34rem';
      break;
    case 15:
      resultDisplay.style.fontSize = '2.2rem';
      break;
    case 16:
      resultDisplay.style.fontSize = '2.1rem';
      break;
    case 17:
      resultDisplay.style.fontSize = '2rem';
      break;
    case 18:
      resultDisplay.style.fontSize = '1.9rem';
      break;
    case 19:
      resultDisplay.style.fontSize = '1.8rem';
      break;
    default:
      resultDisplay.style.fontSize = '3rem';
  }
}

resultDisplay.addEventListener('click', (event) => {
  event.preventDefault();
});
for (let i = 0; i < ListOfNumbers.length; i++) {
  ListOfNumbers[i].addEventListener('click', (event) => {
    if (resultDisplay.value.length < 19) {
      if (newNumber) {
        resultDisplay.value = '';
        newNumber = false;
      }
      if (resultDisplay.value == 0) {
        resultDisplay.value = ListOfNumbers[i].innerText;
      } else {
        resultDisplay.value = resultDisplay.value.concat(
          ListOfNumbers[i].innerText
        );
      }
      fontSizing();
    }
  });
}
resultDisplay.addEventListener('input', () => {
  fontSizing();
});
for (let i = 0; i < listOfOperators.length; i++) {
  listOfOperators[i].addEventListener('click', () => {
    if (
      memoryDisplay.value != 0 &&
      resultDisplay.value != 0 &&
      newNumber == false
    ) {
      leftOperand = memoryDisplay.value.slice(
        0,
        memoryDisplay.value.indexOf(currentOperator)
      );

      resultDisplay.value = operations(
        currentOperator,
        leftOperand,
        resultDisplay.value
      );
      newNumber = true;
    } else {
      memoryDisplay.value = resultDisplay.value.concat(
        listOfOperators[i].innerText
      );
      newNumber = true;
    }
    currentOperator = listOfOperators[i].innerText;
  });
}
buttonPercent.addEventListener('click', () => {
  if (memoryDisplay.value != '0') {
    if (
      memoryDisplay.value.includes('*') ||
      memoryDisplay.value.includes('/')
    ) {
      resultDisplay.value = Number(resultDisplay.value) * 0.01;
    } else {
      resultDisplay.value =
        parseFloat(memoryDisplay.value) * 0.01 * resultDisplay.value;
    }
  } else {
    memoryDisplay.value = '0';
    resultDisplay.value = '0';
  }
});
buttonC.addEventListener('click', () => {
  resultDisplay.value = 0;
  memoryDisplay.value = 0;
});
buttonCE.addEventListener('click', () => {
  resultDisplay.value = 0;
});
buttonBackspace.addEventListener('click', () => {
  resultDisplay.value = resultDisplay.value.slice(
    0,
    resultDisplay.value.length - 1
  );
  fontSizing();
});
buttonFraction.addEventListener('click', () => {
  if (resultDisplay.value != 0) {
    memoryDisplay.value = `1/(${resultDisplay.value})`;
    resultDisplay.value = 1 / resultDisplay.value;
    fontSizing();
  }
});
buttonPower.addEventListener('click', () => {
  resultDisplay.value = resultDisplay.value ** 2;
  fontSizing();
});
buttonSquareRoot.addEventListener('click', () => {
  resultDisplay.value = Math.sqrt(resultDisplay.value);
  fontSizing();
});
buttonPlusMinus.addEventListener('click', () => {
  resultDisplay.value = resultDisplay.value * -1;
});
buttonDecimal.addEventListener('click', () => {
  if (!resultDisplay.value.includes('.')) {
    resultDisplay.value = resultDisplay.value + '.';
  }
});

buttonEqual.addEventListener('click', () => {
  if (newNumber) {
    memoryDisplay.value = resultDisplay.value.concat(
      memoryDisplay.value.slice(
        memoryDisplay.value.indexOf(currentOperator + 1),
        memoryDisplay.value.length
      )
    );
    leftOperand = resultDisplay.value;
    rightOperand = memoryDisplay.value.slice(
      memoryDisplay.value.indexOf(currentOperator),
      memoryDisplay.value.length
    );
  } else {
    leftOperand = memoryDisplay.value.slice(
      0,
      memoryDisplay.value.indexOf(currentOperator)
    );
    rightOperand = resultDisplay.value;
  }
  resultDisplay.value = operations(currentOperator, leftOperand, rightOperand);
  memoryDisplay.value = leftOperand + currentOperator + rightOperand;
  newNumber = true;
  fontSizing();
});
