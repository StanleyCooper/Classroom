/*
* Returns the string with the characters in reverse order
* @param {string} text the string to be reversed
*/

function reverse(text) {
    //forward case
    console.log("forward case:", text.length);
  
    //base case: length is 1
    if (text.length <= 1) {
      console.log("base case:", text);
      return text;
    }
  
    //backward case
    const removedLetter = text.substring(text.length - 1);
    const rest = text.substring(0, text.length - 1);
    console.log("rest: ", rest);
  
    const reverseRest = reverse(rest);
  
    console.log("backward case:", reverseRest.length, reverseRest);
  
    return removedLetter + reverseRest;
  }
  
  console.log(reverse("thinkful"));
  module.exports = reverse;