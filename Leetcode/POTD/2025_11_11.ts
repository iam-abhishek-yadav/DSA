function findMaxForm(strs: string[], m: number, n: number): number {
    const counts = strs.map(s => {
        let zeros = 0;
        for (const ch of s) if (ch === "0") zeros++;
        return [zeros, s.length - zeros] as const;
    });

    const dp: Uint16Array[] = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));

    for (const [zCount, oCount] of counts) {
        for (let i = m; i >= zCount; i--) {
            const row = dp[i];
            const prevRow = dp[i - zCount];
            for (let j = n; j >= oCount; j--) {
                const candidate = prevRow[j - oCount] + 1;
                if (candidate > row[j]) row[j] = candidate;
            }
        }
    }

    return dp[m][n];
}
