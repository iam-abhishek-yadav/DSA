function findFinalValue(nums: number[], original: number): number {
    let res: number = original;
    nums.sort((a, b) => a - b);
    for (const num of nums) {
        if (num === res) res *= 2;
    }
    return res;
};