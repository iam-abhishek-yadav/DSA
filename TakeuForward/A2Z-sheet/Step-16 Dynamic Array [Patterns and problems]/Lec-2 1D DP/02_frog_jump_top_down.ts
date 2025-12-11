class Solution {
    frogJump(heights) {
        const n = heights.length;
        const memo = {};

        function solve(i) {
            if (i === 0) return 0;
            if (memo[i] !== undefined) return memo[i];

            const jump1 = solve(i - 1) + Math.abs(heights[i] - heights[i - 1]);
            const jump2 = i > 1
                ? solve(i - 2) + Math.abs(heights[i] - heights[i - 2])
                : Infinity;

            return memo[i] = Math.min(jump1, jump2);
        }

        return solve(n - 1);
    }
}
