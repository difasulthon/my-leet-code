const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let replacement = []
  const arrayS = s.split('')
  for (let i=arrayS.length-1; i>=0; i--) {
    replacement.push(map[arrayS[i]])
  }

  let result = 0
  let previous = 0
  for (let i=0; i<=replacement.length-1; i++) {
    
    if (replacement[i] < previous) {
      result = result - replacement[i]
    } else {
      result = result + replacement[i]
    }

    previous = replacement[i]
  }

  return result
};

console.log('romanToInt', romanToInt('XVI'))