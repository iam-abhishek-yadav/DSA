function numberOfPaths(grid: number[][], k: number): number {
  const MOD = 1000000007;
  const m = grid.length;
  const n = grid[0].length;

  let prevRow: number[][] = new Array(n);
  for (let j = 0; j < n; ++j) {
    prevRow[j] = new Array(k).fill(0);
  }

  for (let i = 0; i < m; ++i) {
    let left: number[] | null = null;

    for (let j = 0; j < n; ++j) {
      const val = grid[i][j] % k;
      const cur = new Array<number>(k).fill(0);

      if (i === 0 && j === 0) {
        cur[val] = 1;
      } else {
        if (i > 0) {
          const top = prevRow[j];
          for (let r = 0; r < k; ++r) {
            const cnt = top[r];
            if (cnt !== 0) {
              const nr = (r + val) % k;
              cur[nr] = (cur[nr] + cnt) % MOD;
            }
          }
        }

        if (j > 0 && left !== null) {
          for (let r = 0; r < k; ++r) {
            const cnt = left[r];
            if (cnt !== 0) {
              const nr = (r + val) % k;
              cur[nr] = (cur[nr] + cnt) % MOD;
            }
          }
        }
      }

      left = cur;
      prevRow[j] = cur;
    }
  }

  return prevRow[n - 1][0] % MOD;
}
