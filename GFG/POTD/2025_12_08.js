class Solution {
    matrixChainOrder(arr) {
        const n = arr.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(0));
        const split = Array.from({ length: n }, () => Array(n).fill(0));

        for (let len = 2; len < n; len++) {
            for (let i = 1; i + len - 1 < n; i++) {
                const j = i + len - 1;
                dp[i][j] = Infinity;
                for (let k = i; k < j; k++) {
                    const cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                    if (cost < dp[i][j]) {
                        dp[i][j] = cost;
                        split[i][j] = k;
                    }
                }
            }
        }

        const build = (i, j) => {
            if (i === j) return String.fromCharCode(65 + i - 1);
            const k = split[i][j];
            return `(${build(i, k)}${build(k + 1, j)})`;
        };

        return build(1, n - 1);
    }
}

