/*
We want to create a function, which returns an array of functions, which return their index in the array. 
*/

function createFunctions(n) {
  var callbacks = [];

  for (var i in n) {
    (()=> {          
      var temp = i; 
      var res = ()=> temp ;
      callbacks.push(res);
    })();
}

return callbacks;
}
