/*
Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.
*/
function always (n) {
  var privateaccesor=n;
  return function(){
    return privateaccesor;
  };
}

