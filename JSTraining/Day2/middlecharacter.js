/*
You are going to be given a word. 
Your job is to return the middle character of the word. If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

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

