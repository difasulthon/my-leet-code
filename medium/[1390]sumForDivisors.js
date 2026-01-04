function hasNoIntegers(arr) {
  return arr.every(element => !Number.isInteger(element));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  if (hasNoIntegers(nums)) return 0

  const maps = []
  let result = 0;

  for(const num of nums) {
    let divisorsCount = 0;
    let sum = 0;

    // check if p is prime number and p & q in p x q is different prime number
    for (let d=1; d*d<=num; d++) { 
      if (num%d === 0) {
        const other = num / d;

        divisorsCount++;
        sum += d;

        if (other !== d) {
          divisorsCount++;
          sum += other;
        }

        if (divisorsCount > 4) break; // stop
      }
    }

    if (divisorsCount === 4) {
      result += sum;
    }
  }

  /**
   * Bad Performances
   */
  // for(let i=0; i<nums.length; i++) {
  //   let divisors = []
  //   for(let j=1; j <= nums[i]; j++) {
  //     if(nums[i]%j === 0) {
  //       divisors.push(j)
  //     }
  //   }

  //   maps.push(divisors)
  // }

  // let result = 0
  // const addMaps = []

  // for(let i=0; i<maps.length; i++) {
  //   let add = 0

  //   if(maps[i].length === 4) {
  //     for(let j=0; j<maps[i].length; j++) {
  //       add = add + maps[i][j]
  //     }

  //     addMaps.push(add)
  //   }
  // }

  // for(const num of addMaps) {
  //   result = result + num
  // }

  return result
};

const question = [21, 1000]
console.log('sumFourDivisors', sumFourDivisors(question))