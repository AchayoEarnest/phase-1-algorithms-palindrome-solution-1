function reverseString(word){

return word.split("").reverse("").join("")

}


function isPalindrome(word) {
  // I need to make a palidrine function that will allow the user to know if the 
  //..if the word input reversed is the same as the original word e.g "mom" :true, "leg" : false
const reversedWord = reverseString(word)

//confirm if the reversed string is the same as the input.

return reversedWord === word
  
}

/* 
  Add your pseudocode here
reverse the input string

if the reversed string is the same as the input
  return true
else
  return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("dog"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("king"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("wow"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("z"))
}

module.exports = isPalindrome;
