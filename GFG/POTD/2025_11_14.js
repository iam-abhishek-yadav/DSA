class Solution {
    mergeStones(stones, k) {
        const n = stones.length;
        if (n === 1) return 0;
        if ((n - 1) % (k - 1) !== 0) return -1;

        const prefix = new Array(n + 1).fill(0);
        for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + stones[i];

        const rangeSum = (l, r) => prefix[r + 1] - prefix[l];

        const INF = 1e15;
        const dp = Array.from({ length: n }, () => Array(n).fill(0));

        for (let length = 2; length <= n; length++) {
            for (let left = 0; left + length - 1 < n; left++) {
                const right = left + length - 1;
                dp[left][right] = INF;

                for (let mid = left; mid < right; mid += (k - 1)) {
                    dp[left][right] = Math.min(dp[left][right], dp[left][mid] + dp[mid + 1][right]);
                }

                if ((length - 1) % (k - 1) === 0) {
                    dp[left][right] += rangeSum(left, right);
                }
            }
        }

        return dp[0][n - 1];
    }
}
