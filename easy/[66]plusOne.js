/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const digitJoin = digits.join('')
  const digit = BigInt(digitJoin)
  const result = digit + 1n
  const resultString = String(result)
  const results = resultString.split('')

  for(let i=0; i<=results.length-1; i++) {
    results[i] = parseInt(results[i])
  }

  return results
};

console.log('plusOne', plusOne([1,2,4]))