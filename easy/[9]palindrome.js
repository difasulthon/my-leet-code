
function reverseFunction(num, reversed = 0) {
  if (num === 0) {
      return reversed;
  }
  return reverseFunction(Math.floor(num / 10), reversed * 10 + num % 10);
}

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false

  const reverseX = reverseFunction(x)
    
  return x === reverseX
};

console.log('isPalindrome', isPalindrome(-121))