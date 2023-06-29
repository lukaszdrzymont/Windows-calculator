let ListOfNumbers = document.querySelectorAll('.button-number');
let isEqual = document.querySelector('.button-equal');
let resultDisplay = document.getElementsByClassName('result-display');

let num =0;
for(let i=0; i<ListOfNumbers.length;i++) {
    ListOfNumbers[i].addEventListener('click', (event)=>{
    console.log(event.target.value)
    
    })
}
function addNumberToDisplay(num) {
    resultDisplay.value = num;
}