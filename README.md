# Description

The goal is to create a working calculator, identical in functionality to Calculator.app on your Mac.

# I'm a Web Developer Mode

### Getting Started

* Create a new repository
* Create and commit your `index.html` and `main.css`
* Add initial HTML
* Add content and structure using HTML

### Layout

* Add all of the buttons
* Style the buttons to appear on a grid
* Style the buttons, either copying exactly the Calculator.app style, or exercising your creativity to create a different style if you so choose
* Make the buttons appear 3D and use CSS to "press" the button when clicked

### JavaScript

**You are not allowed to use the JavaScript function `eval`**

* Create and commit `main.js`
* Link to your `main.js` using a `<script>` tag.
* Write an alert inside your `main.js` to ensure that your file is linked properly; it should alert "hello" when you refresh the page

**For the following, use the code from Eloquent JavaScript to handle click events:**

* Define a function named `pushNumber` that `alert()`s the number associated with its event argument when called; add this function as an event listener for the number buttons
* Define a function named `pushOperator` that `alert()`s the operator (`+`, `-`, `*`, `/`, `C`) associated with its event argument when called; add this function as an event listener for the operator buttons
* Define a function named `calculate` that `alerts()` `=` when pressed; add this function as an event listener for the `=` button
* Define a variable `calculation` pointing to an empty array
* Using `Array.prototype.push`, perform actions on the `calculation` variable when numbers and operators are pressed
* Using a `for` loop, `alert()` the calculation when `=` is pressed

# Hey, Mikey, I Think He Likes It Mode

* Make the numbers and calculations appear on the calculator display
* Add the following functions to your calculator:
    * A button to flip between positive and negative
    * A decimal point (Hint: you can add a decimal point to a String, then change the String into a Number)
    * Scientific calculator functions
      * square
      * cube
      * arbitrary exponent
      * square root
      * cube root
      * arbitrary root
      * log
      * sin
      * cos
      * tan
      * sinh
      * cosh
      * tanh
    * Scientific calculator values
      * pi
      * e

# Caffeinated Mode

* Scientific calculator memory functions
    * mc
    * m+
    * m-
    * mr
* Make the calculator responsive so that when the browser is mobile size, the scientific functions disappear
