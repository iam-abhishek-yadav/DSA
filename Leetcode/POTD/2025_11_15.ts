function numberOfSubstrings(s: string): number {
    const n = s.length;
    const prev: number[] = new Array(n + 1);
    prev[0] = -1;

    for (let i = 0; i < n; i++) {
        prev[i+1] = (i === 0 || s[i-1] === "0") ? i : prev[i] 
    }

    let result = 0;

    for (let end = 1; end <= n; end++) {
        let zeroCount = s[end - 1] === "0" ? 1 : 0;
        let pos = end;

        while (pos > 0 && zeroCount * zeroCount <= n) {
            const oneCount = end - prev[pos] - zeroCount;
            if (zeroCount * zeroCount <= oneCount) {
                result += Math.min(pos - prev[pos], oneCount - zeroCount * zeroCount + 1);
            }
            pos = prev[pos];
            zeroCount++;
        }
    }

    return result;
}