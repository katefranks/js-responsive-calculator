// const numberButtons = document.querySelectorAll('.number');
// const operatorButtons = document.querySelectorAll('.operator');
// const equalButton = document.querySelector('.equal-sign');
// const clearButton = document.querySelector('.clear');
// const equalButton = document.querySelector('.equal-sign');
// const equalButton = document.querySelector('.equal-sign');

var calculation = [];

// for (var i=0; i < calculation.length; i++) {
//   parseFloat(calculation[i]);
// }

function pushNumber(event) {
  alert(event.target.textContent);
}


const $numberButtons = document.querySelectorAll(".number");
// console.log($numberButtons);
$numberButtons.forEach(function(number) {
  // console.log(number);
  number.addEventListener('click', function pushNumber(){
    calculation.push(parseFloat(this.value));
    console.log(calculation);

})
});

// **********AFTER LUNCH**********
// Create push operator function
// (`+`, `-`, `*`, `/`, `C`)

// *****trying this set up instead*****
// function pushOperator(event) {
//   alert(event.target.value);
//   calculation.push(parseInt(number));
//   calculation.push(event.target.value);
//   number = '';
// ******original code******
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
// ****may need to come back to this- original code.
function pushCalculate(event) {
  alert(event.target.textContent);
}

const $calculateButton = document.querySelectorAll(".equal-sign");
// console.log($calculateButton);
$calculateButton.forEach(function(calculate) {

  calculate.addEventListener('click', function pushCalculate(){
    calculation.push(this.value);
    console.log(calculation);
  });
});

// // multiple selectors- separate w/ commas

// calculation =
// for (var i=0; i < calculation.length; i++) {
//   parseFloat(calculation[i]);
//   console.log(calculation);
// }



var total;
var num1 = calculation[0];
var num2 = calculation[1];

for (let i = 0; i < calculation.length; i++)
if ($operatorButtons.innerHTML == '+') {
    total = num1 + num2;
    console.log(total);

}
else if ($operatorButtons.innerHTML == '-') {
    total = num1 - num2;
    console.log(total);
}
else if ($operatorButtons.innerHTML == '*') {
    total = num1 * num2;
    console.log(total);
}
else {
    total = num1 / num2;
    console.log(total);
}


// function calculate(event) {
//   calculation.push(parseInt(number));
//   calculation.push(event.target.value);
//   var num1 = calculation[0];
//   var num2 = calculation[2];
//   console.log(calculation);
//   for (let i = 0; i < calculation.length; i++)
//      if (calculation[i] === '+') {
//       res = num1 + ' + ' + num2 + ' = ' + (num1 + num2);
//       console.log(res);
//       alert(res);
//       pushClear();
//     } else if (calculation[i] === '-') {
//       res = num1 + ' - ' + num2 + ' = ' + (num1 - num2);
//       console.log(res);
//       alert(res);
//       pushClear();
//     } else if (calculation[i] === '*') {
//       res = num1 + ' * ' + num2 + ' = ' + (num1 * num2);
//       console.log(res);
//       alert(res);
//       pushClear();
//     } else if (calculation[i] === '/') {
//       res = num1 + ' / ' + num2 + ' = ' + (num1 / num2);
//       console.log(res);
//       alert(res);
//       pushClear();
//     }
//   }









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
