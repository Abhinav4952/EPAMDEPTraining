/*
We want to create a function, which returns an array of functions, which return their index in the array. 
*/

function createFunctions(n) {
  var callbacks = [];

  for (var i=0; i<n; i++) {
    (function () { 
            var temp = i; 
            var res = function () { return temp; };
            callbacks.push(res);
    }());
  }
 
  return callbacks;
}

