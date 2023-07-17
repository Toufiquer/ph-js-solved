// isPalindrome function
function isPalindrome(inputText) {
  // if the argument is not string then it's throw an error. so that check and go on.
  if (typeof inputText !== "string") {
    return false;
  }

  // as requirement the last one remove ` , : ` and more, otherwise it return false
  inputText = inputText.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  //   get the length for starting loop and check
  let getLength = inputText.length;
  for (let i = 0; i < getLength / 2; i++) {
    if (inputText[i] !== inputText[getLength - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));

/*  Job Description 
Valid Palindrome
Write a JavaScript function called isPalindrome that takes a string as input and returns true if the
string is a palindrome otherwise return false. A palindrome is a word, phrase, number, or other
sequence of characters that reads the same forward and backward, ignoring punctuation, case, and
spacing.


* Sample:
isPalindrome("level"); // Output: true
isPalindrome("hello"); // Output: false
isPalindrome("A man, a plan, a canal: Panama"); // Output: true
*/
