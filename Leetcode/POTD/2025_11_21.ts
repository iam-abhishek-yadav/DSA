function countPalindromicSubsequence(s: string): number {
    const first = Array(26).fill(Infinity);
    const last = Array(26).fill(-1);

    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - 97;
        first[c] = Math.min(first[c], i);
        last[c] = Math.max(last[c], i);
    }

    let result = 0;

    for (let x = 0; x < 26; x++) {
        if (first[x] < last[x]) {
            const seen = new Set<string>();
            for (let i = first[x] + 1; i < last[x]; i++) {
                seen.add(s[i]);
            }
            result += seen.size;
        }
    }

    return result;
}
