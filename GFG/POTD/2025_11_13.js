class Solution {
    isInterleave(str1, str2, target) {
        const len1 = str1.length;
        const len2 = str2.length;
        const len3 = target.length;
        
        if (len1 + len2 !== len3) return false;
        
        const memo = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(-1));
        
        const canForm = (i, j) => {
            const k = i + j;
            if (i === len1 && j === len2 && k === len3) return 1;
            if (memo[i][j] !== -1) return memo[i][j];
            
            let possible = 0;
            if (i < len1 && str1[i] === target[k]) {
                if (canForm(i + 1, j)) possible = 1;
            }
                if (j < len2 && str2[j] === target[k]) {
                if (canForm(i, j + 1)) possible = 1;
            }
            
            return (memo[i][j] = possible);
        };
        
        return !!canForm(0, 0);
    }
}
