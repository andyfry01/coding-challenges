// Figure out if a given number is a palindrome. You may not
// convert the number into a string.

var palindrome = 11211
var notPalindrome = 11221


function findPalindrome (number) {
}

function reverseNum (number) {
  var reversed = 0;
  while (number !== 0) {
    reversed = reversed * 10 + number % 10
    console.log("reversed after multiplying by 10 and adding number % 10");
    number /= 10;
    console.log("number /= 10");
  }
  console.log(reversed);
}



var number = 12345
var left = undefined;
var reverse = 0;
