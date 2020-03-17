/*

Can you realize a function that returns word count from a given string?
You have to ensure that spaces in string is a whitespace for real.

*/

function countWords(str) {
  var result;
  str = str.replace(/[^\S\r\n]+/g, ' ');
  str = str.split(" ");
  result = str.length;
  
  for(var i in str){
    if (i === "") {
      result -= 1;
    }
  }
     
  return result;    
 }
