class Solution {
    subsetXORSum(arr) {
        const n = arr.length;
        if (n === 0) return 0;

        let orAll = 0;
        for (let x of arr) orAll |= x;

        const multiplier = Math.pow(2, n - 1);

        return orAll * multiplier;
    }
}