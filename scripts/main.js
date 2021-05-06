// const numberButtons = document.querySelectorAll('.number');
// const operatorButtons = document.querySelectorAll('.operator');
// const equalButton = document.querySelector('.equal-sign');
// const clearButton = document.querySelector('.clear');
// const equalButton = document.querySelector('.equal-sign');
// const equalButton = document.querySelector('.equal-sign');


function pushNumber(event) {
  alert(event.target.textContent);
}
// alert();

const $button = document.querySelector(".calculator-keys");
$button.addEventListener('click', pushNumber);




// <button type="button" class="number" value="4">4</button>
// <button type="button" class="number" value="5">5</button>
// <button type="button" class="number" value="6">6</button>

// event.target.textContent.

// const $button = document.querySelectorAll('button');  **target just the # buttons

// const $button = document.querySelectorAll('button');
// $button.addEventListener('click', pushNumber);
