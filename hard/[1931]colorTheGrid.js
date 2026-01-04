const MOD = 1_000_000_007;

function generateColumns(m) {
  const result = [];
  const colors = [0, 1, 2];

  function backtrack(row, col) {
    if (row === m) {
      result.push(col.slice()); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
      return;
    }

    for (const c of colors) {
      if (row > 0 && col[row - 1] === c) continue;
      col[row] = c;
      backtrack(row + 1, col);
    }
  }

  backtrack(0, new Array(m));

  return result;
}

function isCompatible(colA, colB) {  // for check if the cell is the same with previous cell
  for (let i = 0; i < colA.length; i++) {
    if (colA[i] === colB[i]) return false;
  }

  return true;
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var colorTheGrid = function(m, n) { // m for length of cell, n for length of row
  const columns = generateColumns(m);
  console.log('columns', columns)
  const S = columns.length;

  let dp = new Array(S).fill(1);

  for (let step = 1; step < n; step++) {
    const nextDp = new Array(S).fill(0);

    for (let i = 0; i < S; i++) {
      if (dp[i] === 0) continue;

      for (let j = 0; j < S; j++) {
        console.log('j', j)
        console.log('isCompatible(columns[i], columns[j])', isCompatible(columns[i], columns[j]))
        if (isCompatible(columns[i], columns[j])) {
          nextDp[j] = (nextDp[j] + dp[i]) % MOD;
        }
      }
    }

    dp = nextDp;
  }

  let ans = 0;

  for (const v of dp) {
    ans = (ans + v) % MOD;
  }

  return ans;
};

console.log('colorTheGrid', colorTheGrid(1,2))