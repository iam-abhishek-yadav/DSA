class Solution {
    frogJump(heights, k) {
        const n = heights.length;
        const memo = {};

        function solve(i) {
            if (i === 0) return 0;
            if (memo[i] !== undefined) return memo[i];

            let best = Infinity;

            for (let j = 1; j <= k; j++) {
                if (i - j < 0) break;

                const cost =
                    solve(i - j) + Math.abs(heights[i] - heights[i - j]);

                best = Math.min(best, cost);
            }

            return memo[i] = best;
        }

        return solve(n - 1);
    }
}
