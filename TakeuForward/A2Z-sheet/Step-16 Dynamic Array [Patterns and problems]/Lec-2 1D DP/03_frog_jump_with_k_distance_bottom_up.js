class Solution {
    frogJump(heights, k) {
        const n = heights.length;
        const dp = Array(n).fill(Infinity);

        dp[0] = 0;

        for (let i = 1; i < n; i++) {
            for (let j = 1; j <= k; j++) {
                if (i - j < 0) break;

                dp[i] = Math.min(
                    dp[i],
                    dp[i - j] + Math.abs(heights[i] - heights[i - j])
                );
            }
        }

        return dp[n - 1];
    }
}
