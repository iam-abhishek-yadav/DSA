class Solution {
    subsetXOR(n) {
        const xor1toN = (n) => {
            const r = n & 3;
            if (r === 0) return n;
            if (r === 1) return 1;
            if (r === 2) return n + 1;
            return 0;
        };

        const t = xor1toN(n);
        if (t === n) {
            const res = new Array(n);
            for (let i = 0; i < n; ++i) res[i] = i + 1;
            return res;
        }

        const rem = t ^ n;
        const res = [];
        for (let i = 1; i <= n; ++i) if (i !== rem) res.push(i);
        return res;
    }
}