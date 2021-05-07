// const numberButtons = document.querySelectorAll('.number');
// const operatorButtons = document.querySelectorAll('.operator');
// const equalButton = document.querySelector('.equal-sign');
// const clearButton = document.querySelector('.clear');
// const equalButton = document.querySelector('.equal-sign');
// const equalButton = document.querySelector('.equal-sign');


function pushNumber(event) {
  alert(event.target.textContent);
}


const $numberButtons = document.querySelectorAll(".number");
console.log($numberButtons);
$numberButtons.forEach(function(number) {
  // console.log(number);
  number.addEventListener('click', pushNumber);
//
});

// **********AFTER LUNCH**********
// Create push operator function
// (`+`, `-`, `*`, `/`, `C`)

function pushOperator(event) {
  alert(event.target.textContent);
}

const $operatorButtons = document.querySelectorAll(".operator, .clear");
console.log($operatorButtons);
$operatorButtons.forEach(function(operator) {

  operator.addEventListener('click', pushOperator);

});

// multiple classes []






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
