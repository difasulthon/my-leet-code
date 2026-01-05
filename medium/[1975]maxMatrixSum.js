const getNegativeAndZeroCount = (matrix) => {
  let negativeCount = 0
  let zeroCount = 0
  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[i].length; j++) {
      if (matrix[i][j] < 0) negativeCount++
      if (matrix[i][j] === 0) zeroCount++

    }
  }

  return {negativeCount, zeroCount}
}

const getMinimumNum = (matrix) => {
  let listNums = []

  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[i].length; j++) {
      let temp = 0
      if (matrix[i][j] < 0) {
        temp = matrix[i][j] * -1
      } else {
        temp = matrix[i][j]
      }

      listNums.push(temp)
    }
  }

  const sortedNums = listNums.sort((a, b) => a-b) 

  return sortedNums[0]
}

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
  let result = 0

  const minMatrix = getMinimumNum(matrix)
  const {zeroCount, negativeCount} = getNegativeAndZeroCount(matrix)

  if(negativeCount%2 === 0 || zeroCount > 0) {
    for(let i=0; i<matrix.length; i++) {
      let sum = 0
      for(let j=0; j<matrix[i].length; j++) {
        if (matrix[i][j] < 0) {
          matrix[i][j] = matrix[i][j] * -1
        }

        sum += matrix[i][j]
      }
      
      result = result + sum
    }
  } else {
    for(let i=0; i<matrix.length; i++) {
      let sum = 0
      for(let j=0; j<matrix[i].length; j++) {
        if (matrix[i][j] < 0) {
          matrix[i][j] = matrix[i][j] * -1
        }

        sum += matrix[i][j]
      }
      
      result = result + sum
    }

    result = result - (2 * minMatrix)
  }
  
  return result
};

console.log('maxMatrixSum', maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]]))