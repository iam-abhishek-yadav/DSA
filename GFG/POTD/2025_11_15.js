class Solution {
    minCutCost(n, cuts) {
        cuts = [0, ...cuts.slice().sort((a, b) => a - b), n];
        const m = cuts.length;
        const dp = Array.from({ length: m }, () => Array(m).fill(0));

        for (let length = 2; length < m; length++) {
            for (let i = 0; i + length < m; i++) {
                const j = i + length;
                let best = Infinity;
                for (let k = i + 1; k < j; k++) {
                    const cost = dp[i][k] + dp[k][j] + (cuts[j] - cuts[i]);
                    if (cost < best) best = cost;
                }
                dp[i][j] = best;
            }
        }

        return dp[0][m - 1];
    }
}
