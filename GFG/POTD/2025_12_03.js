class Solution {
  tsp(cost) {
    const n = cost.length;
    const N = 1 << n;
    const INF = 1e9;

    const dp = Array.from({ length: N }, () => Array(n).fill(INF));
    dp[1][0] = 0;

    for (let mask = 0; mask < N; mask++) {
      for (let i = 0; i < n; i++) {
        if (!(mask & (1 << i))) continue;
        if (dp[mask][i] === INF) continue;

        for (let j = 0; j < n; j++) {
          if (mask & (1 << j)) continue;
          const newMask = mask | (1 << j);
          dp[newMask][j] = Math.min(dp[newMask][j], dp[mask][i] + cost[i][j]);
        }
      }
    }

    let ans = INF;
    const fullMask = (1 << n) - 1;
    for (let i = 0; i < n; i++) {
      ans = Math.min(ans, dp[fullMask][i] + cost[i][0]);
    }

    return ans;
  }
}
