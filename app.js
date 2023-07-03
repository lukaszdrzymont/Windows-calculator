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
let result;
let operator;

resultDisplay.addEventListener('click', (event) => {
  event.preventDefault();
});
for (let i = 0; i < ListOfNumbers.length; i++) {
  ListOfNumbers[i].addEventListener('click', (event) => {
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
  });
}
buttonPercent.addEventListener('click', () => {
  console.log('%');
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
});
buttonFraction.addEventListener('click', () => {
  memoryDisplay.value = `1/(${resultDisplay.value})`;
  resultDisplay.value = 1 / resultDisplay.value;
});
buttonPower.addEventListener('click', () => {
  resultDisplay.value = resultDisplay.value ** 2;
});
buttonSquareRoot.addEventListener('click', () => {
  resultDisplay.value = Math.sqrt(resultDisplay.value);
});
buttonPlusMinus.addEventListener('click', () => {
  resultDisplay.value = resultDisplay.value * -1;
});
buttonDecimal.addEventListener('click', () => {
  console.log(buttonOperator);
  if (!resultDisplay.value.includes('.')) {
    resultDisplay.type = 'text';
    resultDisplay.value = resultDisplay.value.concat('.');
  }
});
for (let i = 0; i < listOfOperators.length; i++) {
  listOfOperators[i].addEventListener('click', () => {
    memoryDisplay.value = resultDisplay.value.concat(
      listOfOperators[i].innerText
    );
    newNumber = true;
  });
}
buttonEqual.addEventListener('click', () => {
  memoryDisplay.value = memoryDisplay.value.concat(resultDisplay.value);
  resultDisplay.value = eval(memoryDisplay.value);
});
