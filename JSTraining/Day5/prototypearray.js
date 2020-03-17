/*
This kata is designed to test your ability to extend the functionality of built-in classes.
 In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
*/
Array.prototype.square = function() {
  var squared = [];
  for (var i = 0; i < this.length; i++) {
    squared[i] = Math.pow(this[i], 2);
  }
  return squared;
}

Array.prototype.cube = function() {
  var cubed = [];
  for (var i = 0; i < this.length; i++) {
    cubed[i] = Math.pow(this[i], 3);
  }
  return cubed;
}

Array.prototype.sum = function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
}

Array.prototype.average = function() {
  if (this.length == 0) return NaN;
  return this.sum() / this.length;
}

Array.prototype.even = function() {
  var evens = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 == 0) evens.push(this[i]);
  }
  return evens;
}
Array.prototype.odd = function() {
  var odds = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 == 1) odds.push(this[i]);
  }
  return odds;
}

