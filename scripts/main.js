// Declaring buttons as variables so that they can be used later on.
// Using querySelectorAll to take hold of all elements that match the selector class "operator". querySelector is used for the remaining elements as they are the only ones of each class.

const $numberButtons = document.querySelectorAll(".number"); //targeting buttons w/ a class of number. QueryselectorALL returns the node list. Can not add an event listener to a node list, need to loop over the list using "forEach"
const $operatorButtons = document.querySelectorAll(".operator");
const $calculateButton = document.querySelector(".equal-sign");
const $clearButton = document.querySelector(".clear");
const $plusMinus = document.querySelector(".plus-minus");
const $percent = document.querySelector(".percent");
const $decimal = document.querySelector(".decimal");
let $calcTotal = document.querySelector(".calculator-screen");
// creating an empty array where values will be pushed using `Array.push()` to perform actions on the `calculation` variable when numbers and operators are pressed.
var calculation = [];
// creating  an empty string, which will later be parseInt to turn into an integer.
var total = '';

// adding event listeners to listen for "click" and call a function.
$numberButtons.forEach(function(button) {
  button.addEventListener('click', pushNumber)
});

$operatorButtons.forEach(function(operator) {
  operator.addEventListener('click', pushOperator);
});


$calculateButton.addEventListener('click', calculate);
$clearButton.addEventListener('click', pushClear);
$plusMinus.addEventListener('click', pushPlusMinus);
$percent.addEventListener('click', pushPercent);
$decimal.addEventListener('click', pushDecimal);

// pushnumber alerts the number associated with its event argument when called
// value vs text content- text content is the human readable version. Typically target value, that way you can change the user's visual w/o having to go back and refactor something else.

function pushNumber(event) {
  calculation.push(event.target.value);
  $calcTotal.value = event.target.value;
}


function pushOperator(event) {
  calculation.push(event.target.value);
  total = '';
  $calcTotal.value = event.target.value;
}

function pushClear(event) {
  // alert('Screen Cleared');
  calculation = [];
  total = '';
  $calcTotal.value = '0';
}

function pushPlusMinus(event) {
  // alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
  $calcTotal.value = event.target.value;
}

function pushPercent(event) {
  // alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
  $calcTotal.value = event.target.value;
}

function pushDecimal(event) {
  // alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
  $calcTotal.value = event.target.value;
}


////////////////////////////////////////////////////////////////
// for loop, giving back num1, num2, and the operator.

function calculate() {
  // alert('=');

  calculation.push(parseInt(total));
  calculation.push(event.target.value);

  let num1 = '', num2 = '', operator = null, totalValue = 0;
  let operators = ['*', '/', '+', '-']

  console.log('calc', calculation);


  for (let i = 0; i < calculation.length; i++) {
    const char = calculation[i]; //value at that index in the calculation array.


    if (operators.includes(char)) {
      operator = char;
    } else if (operator == null) { //if not an operator, and operator hasn't been set, then num1 = char
      num1 += char;

    } else {
      num2 += char; //if not an operator, and operator has been set, then num2 = char
    }
  }
  //converting value of num1 & num2 from string to #
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  //operator is still a string, no way to convert that, so explaining what to return.
  if (operator === '+') {
    totalValue = num1 + num2;
  } else if (operator === '-') {
    totalValue = num1 - num2;
  } else if (operator === '*') {
    totalValue = num1 * num2;
  } else if (operator === '/') {
    totalValue = num1 / num2;
  }
    $calcTotal.value = totalValue;
}
