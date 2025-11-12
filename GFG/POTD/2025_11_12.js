class Solution {
    wildCard(text, pattern) {
        const textLen = text.length;
        const patternLen = pattern.length;

        const dp = Array.from({ length: textLen + 1 }, () =>
            new Array(patternLen + 1).fill(false)
        );

        dp[0][0] = true;

        for (let j = 1; j <= patternLen; j++) {
            if (pattern[j - 1] !== '*') break;
            dp[0][j] = dp[0][j - 1];
        }

        for (let i = 1; i <= textLen; i++) {
            for (let j = 1; j <= patternLen; j++) {
                const textChar = text[i - 1];
                const patternChar = pattern[j - 1];

                if (textChar === patternChar || patternChar === '?') {
                    dp[i][j] = dp[i - 1][j - 1];
                } else if (patternChar === '*') {
                    dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
                }
            }
        }

        return dp[textLen][patternLen];
    }
}
