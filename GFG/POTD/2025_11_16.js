class Solution {
    LCIS(a, b) {
        const n = a.length;
        const m = b.length;
        const dp = new Array(m).fill(0);

        for (let i = 0; i < n; i++) {
            let currentMax = 0;

            for (let j = 0; j < m; j++) {
                if (a[i] === b[j]) {
                    dp[j] = currentMax + 1;
                } else if (b[j] < a[i]) {
                    currentMax = Math.max(currentMax, dp[j]);
                }
            }
        }

        let ans = 0;
        for (const v of dp) {
            ans = Math.max(ans, v);
        }

        return ans;
    }
}
