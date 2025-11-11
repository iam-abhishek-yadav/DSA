/**
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */

class Solution {
    minSuperSeq(s1, s2) {
        const m = s1.length;
        const n = s2.length;
        if (m === 0) return n;
        if (n === 0) return m;

        const dp = new Array(n + 1).fill(0);

        for (let i = 1; i <= m; i++) {
            let prev = 0;
            for (let j = 1; j <= n; j++) {
                const temp = dp[j];
                if (s1[i - 1] === s2[j - 1]) {
                    dp[j] = prev + 1;
                } else {
                    dp[j] = Math.max(dp[j], dp[j - 1]);
                }
                prev = temp;
            }
        }

        const lcs = dp[n];
        return m + n - lcs;
    }
}