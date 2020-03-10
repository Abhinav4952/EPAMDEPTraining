/*

Can you realize a function that returns word count from a given string?
You have to ensure that spaces in string is a whitespace for real.

*/

function countWords(str) {
 var result;
    str = str.replace(/[^\S\r\n]+/g, ' ');//Transforming all special characters except letters into white spaces
    str = str.split(" ");
    result = str.length;
    
    for (var index = 0; index < str.length; index++) {
      if (str[index] === "") {
        result -= 1;
      }
    }
    
    return result;    
}

