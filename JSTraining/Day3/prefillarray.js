/*
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.
*/

function prefill(n, v) {
if(n === 0 || n === '0') return [];

  if(!Number.isInteger(n) || n < 0 ){
    let TypeError = new Error;
    TypeError.name = "TypeError";
    TypeError.message = n + " is invalid";
    throw TypeError
  };

  return new Array(n).fill(v);
}

