/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  let output
  // for(let i=0; i<=nums.length-1; i++) {
  //   for(let j=i; j<=nums.length-1; j++) {
  //     if(i !== j && nums[i] === nums[j]) {
  //       output = nums[i]
  //     }
  //   }
  // }

  const seen = new Set(); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  for(const num of nums) {
    if (seen.has(num)) {
      output = num
    }
    seen.add(num)
  }
    
  return output
};

console.log('repeatedNTimes', repeatedNTimes([5,1,5,2,5,3,5,4]))