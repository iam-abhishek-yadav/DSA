class Solution {
    constructArr(arr) {
        const l = arr.length;
        const al = [];

        const n = 1 + Math.floor(Math.sqrt(2 * l));

        if (l === 1) {
            al.push(1);
            al.push(arr[0] - 1);
            return al;
        }

        const sum = arr[0];
        const diff = arr[1] - arr[n - 1];
        const a1 = Math.floor((sum + diff) / 2);

        al.push(a1);

        for (let i = 0; i < n - 1; i++) {
            al.push(arr[i] - a1);
        }

        return al;
    }
}