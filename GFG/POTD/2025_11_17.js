class Solution {
    maxSumIS(arr) {
        const n = arr.length;
        if (n === 0) return 0;
        const dp = Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            dp[i] = arr[i];
        }
        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (arr[i] > arr[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + arr[i]);
                }
            }
        }
        return Math.max(...dp);
    }
}