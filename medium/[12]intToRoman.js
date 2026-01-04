/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let replacement = []
  const thousand = Math.floor(num / 1000) * 1000
  const hundred = Math.floor((num - thousand) / 100) * 100
  const tens = Math.floor((num - (thousand + hundred)) / 10) * 10
  const ones = Math.floor((num - (thousand + hundred + tens)))
  replacement.push(thousand, hundred, tens, ones)

  let romans = []

  for(let i=0; i<=replacement.length-1; i++) {
    while(replacement[i] >= 1000) {
      replacement[i] -= 1000
      romans.push('M')
    }

    while(replacement[i] >= 100 && replacement[i] < 1000) {
      if (replacement[i] === 400) {
        romans.push('CD')
        replacement[i] -= replacement[i]
      } else if (replacement[i] === 900) {
        romans.push('CM')
        replacement[i] -= replacement[i]
      } else {
        if(replacement[i] >= 500) {
          romans.push('D')
          replacement[i] -= 500
        } else {
          romans.push('C')
          replacement[i] -= 100
        }
      }
    }

    while(replacement[i] >= 10 && replacement[i] < 100) {
      if (replacement[i] === 40) {
        romans.push('XL')
        replacement[i] -= replacement[i]
      } else if (replacement[i] === 90) {
        romans.push('XC')
        replacement[i] -= replacement[i]
      } else {
        if(replacement[i] >= 50) {
          romans.push('L')
          replacement[i] -= 50
        } else {
          romans.push('X')
          replacement[i] -= 10
        }
      }
    }

    while(replacement[i] > 0 && replacement[i] < 10) {
      if (replacement[i] === 4) {
        romans.push('IV')
        replacement[i] -= replacement[i]
      } else if (replacement[i] === 9) {
        romans.push('IX')
        replacement[i] -= replacement[i]
      } else {
        if(replacement[i] >= 5) {
          romans.push('V')
          replacement[i] -= 5
        } else {
          romans.push('I')
          replacement[i] -= 1
        }
      }
    }
  }

  return romans.join('')
};

console.log('intToRoman', intToRoman(500))