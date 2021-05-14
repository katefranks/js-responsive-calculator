// Declaring buttons as variables so that they can be used later on.
// Using querySelectorAll to take hold of all elements that match the selector class "operator". querySelector is used for the remaining elements as they are the only ones of each class.
const $numberButtons = document.querySelectorAll(".number");
const $operatorButtons = document.querySelectorAll(".operator");
const $calculateButton = document.querySelector(".equal-sign");
const $clearButton = document.querySelector(".clear");
const $plusMinus = document.querySelector(".plus-minus");
const $percent = document.querySelector(".percent");
const $decimal = document.querySelector(".decimal");
// creating an empty array where values will be pushed
var calculation = [];
// creating  an empty string, which will later be parseInt to turn into an integer.
var total = '';

// adding event listeners to listen for "clicks" and call a function.
$numberButtons.forEach(function(button){
  button.addEventListener('click', pushNumber)
});
$operatorButtons.forEach(function(operator){
  operator.addEventListener('click', pushOperator);
})
$calculateButton.addEventListener('click', pushCalculate);
$clearButton.addEventListener('click', pushClear);
$plusMinus.addEventListener('click', pushPlusMinus);
$percent.addEventListener('click', pushPercent);
$decimal.addEventListener('click', pushDecimal);



// creating functions which send an alert of the value of the selected target.

function pushNumber(event) {
  alert(event.target.value);
  total = total.concat(event.target.value);
  console.log(total);
}
// concatenating values of numbers to string total.

function pushOperator(event) {
  alert(event.target.value);
  calculation.push(parseInt(total));
  calculation.push(event.target.value);
  total = '';
  console.log(calculation);
}
// parseInt used to change values from strings to actual values/integers
function pushClear(event) {
  alert('Screen Cleared');
  calculation = [];
  total = '';
}

function pushPlusMinus(event){
  alert(event.target.value);
  calculation.push(event.target.value);
}

function pushPercent(event){
  alert(event.target.value);
  calculation.push(event.target.value);
}

function pushDecimal(event){
  alert(event.target.value);
  calculation.push(event.target.value);
}

// function to run calculation.

function pushCalculate(event){
  calculation.push(parseInt(total));
  calculation.push(event.target.value);

// adding values to the previously created empty array calculation
  var number1 = calculation[0];
  var number2 = calculation[2];

  console.log(calculation);
  for (let i = 0; i < calculation.length; i++)
  if (calculation[i] === '+') {
      result = number1 + ' + ' + number2 + ' = ' + (number1 + number2);
      console.log(result);
      alert(result);
  }else if (calculation[i] === '-') {
      result = number1 + ' - ' + number2 + ' = ' + (number1 - number2);
      console.log(result);
      alert(result);
  } else if (calculation[i] === '*') {
      result = number1 + ' * ' + number2 + ' = ' + (number1 * number2);
      console.log(result);
      alert(result);
  } else if (calculation[i] === '/') {
      result = number1 + ' * ' + number2 + ' = ' + (number1 / number2);
      console.log(result);
      alert(result);
  }
}

// Initializing i = 0, setting condition to run loop so long as i is less than the length of the array calculation, incrememnting i by 1 each loop. Lots of research/ trial & error got this to calculate, but I still have some questions on the this.




//////////////////////////////////////////////////////////////////
////////     Re-organizing the below code!  /////////////////////
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
// // **********AFTER LUNCH**********
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
