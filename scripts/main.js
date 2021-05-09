// const numberButtons = document.querySelectorAll('.number');
// const operatorButtons = document.querySelectorAll('.operator');
// const equalButton = document.querySelector('.equal-sign');
// const clearButton = document.querySelector('.clear');
// const equalButton = document.querySelector('.equal-sign');
// const equalButton = document.querySelector('.equal-sign');

var calculation = [];

function pushNumber(event) {
  alert(event.target.textContent);
}


const $numberButtons = document.querySelectorAll(".number");
// console.log($numberButtons);
$numberButtons.forEach(function(number) {
  // console.log(number);
  number.addEventListener('click', function pushNumber(){
    calculation.push(this.value);
    console.log(calculation);

})
});

// **********AFTER LUNCH**********
// Create push operator function
// (`+`, `-`, `*`, `/`, `C`)

function pushOperator(event) {
  alert(event.target.textContent);
}
// multiple selectors- separate w/ commas
const $operatorButtons = document.querySelectorAll(".operator, .clear");
// console.log($operatorButtons);
$operatorButtons.forEach(function(operator) {

  operator.addEventListener('click', function pushOperator(){
    calculation.push(this.value);
    console.log(calculation);
  });

});

//**step 3 function calculate =  class="equal-sign"

function pushCalculate(event) {
  alert(event.target.textContent);
}
// multiple selectors- separate w/ commas
const $calculateButton = document.querySelectorAll(".equal-sign");
// console.log($calculateButton);
$calculateButton.forEach(function(calculate) {
  calculate.addEventListener('click', pushCalculate);
});



// ***step 6- loop
// stopping point for Friday 5/7/21.
// 5/8- try to get if/else to work properly!


// if (innerHTML.$operatorButtons == '+') {
//     calculation = number1 + number2;
// }
// else if (innerHTML.$operatorButtons == '-') {
//     calculation = number1 - number2;
// }
// else if (innerHTML.$operatorButtons == '*') {
//     calculation = number1 * number2;
// }
// else {
//     calculation = number1 / number2;
// }

// display the result
console.log(`${number1} ${operator} ${number2} = ${calculation}`);









// **step 4: define a variable 'calculation' pointing to empty array


// calculation = calculation.push(this.value);

// calculation.push(event.target.textContent);
// (this.value)
// **step 5: Using `Array.prototype.push`, perform actions on the `calculation` variable
// when numbers and operators are pressed



// $calculateButton.forEach(function(equals) {
//
//   equals.addEventListener('click', calculate);
//
// });

// function pushNumber(event) {
//   alert(event.target.textContent);
// }
//
//
// const $numberButtons = document.querySelectorAll(".number");
// console.log($numberButtons);
// $numberButtons.forEach(function(number) {
//   // console.log(number);
//   number.addEventListener('click', pushNumber);
// //
// });



// function demo(params) {
//   console.log(params);
// }
//
// demo('Hey');
// demo('Hello');
//

  // for(let i=0; i < $numberButtons.length; i+=) {
  //     console.log($numberButtons[i]);
  // }



// forEach($numberButtons);
//   console.log($numberButtons);
//


// var myNodeList = document.querySelectorAll('li');
// forEach($numberButtons, function (index, value) {
//   console.log(index, value); // passes index + value back!
// });

// for(var i = 0; i < $numberButtons.length; i ++) {
//   console.log($numberButtons);
// }



// console.log('button', $button);
// $button.addEventListener('click', pushNumber);

// node list for each


// ***no alerts
// const $button = document.querySelectorAll(".number");
// $button.addEventListener('click', pushNumber);

// ***only 7 alerts
// const $button = document.querySelector(".number");
// $button.addEventListener('click', pushNumber);





// event.target.textContent.

// const $button = document.querySelectorAll('button');  **target just the # buttons

// const $button = document.querySelectorAll('button');
// $button.addEventListener('click', pushNumber);
