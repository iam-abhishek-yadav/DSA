class Solution {
    frogJump(heights) {
        const n = heights.length;
        const dp = [];
        
        dp[0] = 0;
        dp[1] = Math.abs(heights[1] - heights[0]);

        for (let i = 2; i < n; i++) {
            const jump1 = dp[i - 1] + Math.abs(heights[i] - heights[i - 1]);
            const jump2 = dp[i - 2] + Math.abs(heights[i] - heights[i - 2]);
            dp[i] = Math.min(jump1, jump2);
        }

        return dp[n - 1];
    }
}
