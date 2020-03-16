/*

Can you realize a function that returns word count from a given string?
You have to ensure that spaces in string is a whitespace for real.

*/

function getMiddle(s)
{
  const inputLength=s.length;
  if(inputLength % 2 === 0){
    return s[(inputLength / 2) - 1] + s[inputLength / 2];
    } else {
    return s[Math.floor(inputLength/ 2)];
  }
}
