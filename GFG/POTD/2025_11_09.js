class Solution {
    chocolatePickup(mat) {
        if (!mat || mat.length === 0) return 0;
        const n = mat.length;
        if (mat[0][0] === -1 || mat[n - 1][n - 1] === -1) return 0;

        const K = 2 * n - 1;
        const NEG = -1e9;
        const dp = Array.from({ length: K }, () =>
            Array.from({ length: n }, () => Array(n).fill(NEG))
        );

        dp[0][0][0] = mat[0][0];

        for (let k = 1; k < K; k++) {
            for (let i1 = 0; i1 < n; i1++) {
                for (let i2 = 0; i2 < n; i2++) {
                    const j1 = k - i1;
                    const j2 = k - i2;

                    if (j1 < 0 || j1 >= n || j2 < 0 || j2 >= n) continue;
                    if (mat[i1][j1] === -1 || mat[i2][j2] === -1) continue;

                    let val = mat[i1][j1];
                    if (i1 !== i2) val += mat[i2][j2];

                    let best = NEG;
                    if (i1 > 0 && i2 > 0) best = Math.max(best, dp[k - 1][i1 - 1][i2 - 1]);
                    if (i1 > 0 && j2 > 0) best = Math.max(best, dp[k - 1][i1 - 1][i2]);
                    if (j1 > 0 && i2 > 0) best = Math.max(best, dp[k - 1][i1][i2 - 1]);
                    if (j1 > 0 && j2 > 0) best = Math.max(best, dp[k - 1][i1][i2]);

                    if (best !== NEG) {
                        dp[k][i1][i2] = best + val;
                    }
                }
            }
        }

        return Math.max(0, dp[K - 1][n - 1][n - 1]);
    }
}