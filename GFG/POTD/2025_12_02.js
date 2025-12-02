class Solution {
    maxScore(s, jumps) {
        const n = s.length;
        const ascii = c => c.charCodeAt(0);
    
        const jumpFrom = {};
        for (let [a, b] of jumps) {
            if (!jumpFrom[a]) jumpFrom[a] = [];
            jumpFrom[a].push(b);
        }
    
        const positions = {};
        for (let i = 0; i < n; i++) {
            const c = s[i];
            if (!positions[c]) positions[c] = [];
            positions[c].push(i);
        }
    
        const prefAll = new Array(n + 1).fill(0);
        for (let i = 0; i < n; i++) {
            prefAll[i + 1] = prefAll[i] + ascii(s[i]);
        }
    
        const prefChar = {};
        for (let c of Object.keys(positions)) {
            prefChar[c] = new Array(n + 1).fill(0);
            for (let i = 0; i < n; i++) {
                prefChar[c][i + 1] = prefChar[c][i] + (s[i] === c ? ascii(c) : 0);
            }
        }
    
        function getScore(i, j) {
            const c = s[j];
            return (prefAll[j] - prefAll[i]) - (prefChar[c][j] - prefChar[c][i]);
        }
    
        const nextSame = new Array(n).fill(-1);
        const lastPos = {};
        for (let i = n - 1; i >= 0; i--) {
            const c = s[i];
            nextSame[i] = lastPos[c] ?? -1;
            lastPos[c] = i;
        }
    
        const dp = new Array(n).fill(0);
    
        for (let i = n - 1; i >= 0; i--) {
            let best = 0;
    
            let j = nextSame[i];
            if (j !== -1) best = Math.max(best, getScore(i, j) + dp[j]);
    
            const fromC = s[i];
            if (jumpFrom[fromC]) {
                for (const target of jumpFrom[fromC]) {
                    const list = positions[target];
                    let lo = 0, hi = list.length - 1, ans = -1;
                    while (lo <= hi) {
                        let mid = (lo + hi) >> 1;
                        if (list[mid] > i) {
                            ans = list[mid];
                            hi = mid - 1;
                        } else lo = mid + 1;
                    }
                    if (ans !== -1) {
                        best = Math.max(best, getScore(i, ans) + dp[ans]);
                    }
                }
            }
    
            dp[i] = best;
        }
    
        return dp[0];
    }
}