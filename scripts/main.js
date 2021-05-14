// Declaring buttons as variables so that they can be used later on.
// Using querySelectorAll to take hold of all elements that match the selector class "operator". querySelector is used for the remaining elements as they are the only ones of each class.

const $numberButtons = document.querySelectorAll(".number"); //targeting buttons w/ a class of number. QueryselectorALL returns the node list. Can not add an event listener to a node list, need to loop over the list using "forEach"
const $operatorButtons = document.querySelectorAll(".operator");
const $calculateButton = document.querySelector(".equal-sign");
const $clearButton = document.querySelector(".clear");
const $plusMinus = document.querySelector(".plus-minus");
const $percent = document.querySelector(".percent");
const $decimal = document.querySelector(".decimal");
// creating an empty array where values will be pushed using `Array.prototype.push` to perform actions on the `calculation` variable when numbers and operators are pressed.
var calculation = [];
// creating  an empty string, which will later be parseInt to turn into an integer.
var total = '';

// adding event listeners to listen for "clicks" and call a function.
$numberButtons.forEach(function(button){
  button.addEventListener('click', pushNumber)
});  // if you put pushNumber() it would tell Js to run function, not do it when click happens.

$operatorButtons.forEach(function(operator){
  operator.addEventListener('click', pushOperator);
}) //using forEach again b/c there's more than one, and you can't add an event listener to a node list.

$calculateButton.addEventListener('click', calculate);
$clearButton.addEventListener('click', pushClear);
$plusMinus.addEventListener('click', pushPlusMinus);
$percent.addEventListener('click', pushPercent);
$decimal.addEventListener('click', pushDecimal);



// pushnumber alerts the number associated with its event argument when called
// value vs text content- text content is the human readable version. Typically target value, that way you can change the user's visual w/o having to go back and refactor something else.

function pushNumber(event) {
  alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
}


function pushOperator(event) {
  alert(event.target.value);
  calculation.push(event.target.value);
  total = '';
  console.log(calculation);
}

function pushClear(event) {
  alert('Screen Cleared');
  calculation = [];
  total = '';
}

function pushPlusMinus(event){
  alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
}

function pushPercent(event){
  alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
}

function pushDecimal(event){
  alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
}


////////////////////////////////////////////////////////////////
// for loop, giving back num1, num2, and the operator.

function calculate() {
  alert('=');

calculation.push(parseInt(total));
calculation.push(event.target.value);

let num1 ='', num2 = '', operator = null;
let operators = ['*', '/', '+', '-']

for(let i=0; i < calculation.length; i++) {
  const char = calculation[i];

  if (operators.includes(char)) {
    operator = char;
  } else if (!operator) {
    num1 += char;
  } else {
    num2 += char;
  }
}
num1= parseFloat(num1);
num2 = parseFloat(num2);
console.log(num1, num2)

if(operator === '+') {
  // return num1 + num2;
   alert(num1 + num2);
   console.log(num1 + num2);
} else if (operator === '-') {
  // return num1 - num2;
  alert(num1 - num2);
  console.log(num1 - num2);
} else if (operator === '*') {
  // return num1 * num2;
  alert(num1 * num2);
  console.log(num1 * num2);
}else if (operator === '/') {
  // return num1 / num2;
  alert(num1 / num2);
  console.log(num1 / num2);
}

}







//////////////////////////////////////////////////////////////////
////////  Section below is previous attempts & notes   ///////////
/////////////////////////////////////////////////////////////////

// var calculation = [];
//
// // for (var i=0; i < calculation.length; i++) {
// //   parseInt(calculation[i]);
// // }//
// //////// changed below from textConten to Value in above.
// function pushNumber(event) {
//   alert(event.target.textContent);
// }
//
//
// const $numberButtons = document.querySelectorAll(".number");
// // console.log($numberButtons);
// $numberButtons.forEach(function(number) {
//   // console.log(number);
//   number.addEventListener('click', function pushNumber(){
//     calculation.push(parseFloat(this.value));
//     console.log(calculation);
//
// })
// });
//
// // ********************
// // Create push operator function
// // (`+`, `-`, `*`, `/`, `C`)
//
// // *****trying this set up instead*****
// // function pushOperator(event) {
// //   alert(event.target.value);
// //   calculation.push(parseInt(number));
// //   calculation.push(event.target.value);
// //   number = '';
// // ******original code******
// function pushOperator(event) {
//   alert(event.target.textContent);
// }
// // multiple selectors- separate w/ commas
// const $operatorButtons = document.querySelectorAll(".operator, .clear");
// // console.log($operatorButtons);
// $operatorButtons.forEach(function(operator) {
//
//   operator.addEventListener('click', function pushOperator(){
//     calculation.push(this.value);
//     console.log(calculation);
//   });
//
// });
//
//
//
//
// //**step 3 function calculate =  class="equal-sign"
// // ****may need to come back to this- original code.
// function pushCalculate(event) {
//   alert(event.target.textContent);
// }
//
// const $calculateButton = document.querySelectorAll(".equal-sign");
// // console.log($calculateButton);
// $calculateButton.forEach(function(calculate) {
//
//   calculate.addEventListener('click', function pushCalculate(){
//     calculation.push(this.value);
//     console.log(calculation);
//   });
// });
//
// // // multiple selectors- separate w/ commas
//
// // calculation =
// // for (var i=0; i < calculation.length; i++) {
// //   parseFloat(calculation[i]);
// //   console.log(calculation);
// // }
//
//
//
// var total;
// var num1 = calculation[0];
// var num2 = calculation[2];
//
// for (let i = 0; i < calculation.length; i++)
// if ($operatorButtons.innerHTML == '+') {
//     total = num1 + num2;
//     console.log(total);
//
// }
// else if ($operatorButtons.innerHTML == '-') {
//     total = num1 - num2;
//     console.log(total);
// }
// else if ($operatorButtons.innerHTML == '*') {
//     total = num1 * num2;
//     console.log(total);
// }
// else {
//     total = num1 / num2;
//     console.log(total);
// }
//
// ////// NOTES ///////
//
// // **step 4: define a variable 'calculation' pointing to empty array
//
//
// // calculation = calculation.push(this.value);
//
// // calculation.push(event.target.textContent);
// // (this.value)
// // **step 5: Using `Array.prototype.push`, perform actions on the `calculation` variable
// // when numbers and operators are pressed
//
//
//
// // $calculateButton.forEach(function(equals) {
// //
// //   equals.addEventListener('click', calculate);
// //
// // });
//
// // function pushNumber(event) {
// //   alert(event.target.textContent);
// // }
// //
// //
// // const $numberButtons = document.querySelectorAll(".number");
// // console.log($numberButtons);
// // $numberButtons.forEach(function(number) {
// //   // console.log(number);
// //   number.addEventListener('click', pushNumber);
// // //
// // });
//
//
//
// // function demo(params) {
// //   console.log(params);
// // }
// //
// // demo('Hey');
// // demo('Hello');
// //
//
//   // for(let i=0; i < $numberButtons.length; i+=) {
//   //     console.log($numberButtons[i]);
//   // }
//
//
//
// // forEach($numberButtons);
// //   console.log($numberButtons);
// //
//
//
// // var myNodeList = document.querySelectorAll('li');
// // forEach($numberButtons, function (index, value) {
// //   console.log(index, value); // passes index + value back!
// // });
//
// // for(var i = 0; i < $numberButtons.length; i ++) {
// //   console.log($numberButtons);
// // }
//
//
//
// // console.log('button', $button);
// // $button.addEventListener('click', pushNumber);
//
// // node list for each
//
//
// // ***no alerts
// // const $button = document.querySelectorAll(".number");
// // $button.addEventListener('click', pushNumber);
//
// // ***only 7 alerts
// // const $button = document.querySelector(".number");
// // $button.addEventListener('click', pushNumber);
//
//
//
//
//
// // event.target.textContent.
//
// // const $button = document.querySelectorAll('button');  **target just the # buttons
//
// // const $button = document.querySelectorAll('button');
// // $button.addEventListener('click', pushNumber);
