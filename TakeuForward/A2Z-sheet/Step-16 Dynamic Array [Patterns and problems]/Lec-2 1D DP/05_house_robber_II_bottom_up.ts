function rob(nums: number[]): number {
    const n = nums.length;
    if (n === 1) return nums[0];

    function robLinear(arr: number[]): number {
        let prev2 = 0;
        let prev1 = arr[0];

        for (let i = 1; i < arr.length; i++) {
            const curr = Math.max(prev1, prev2 + arr[i]);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }

    const option1 = robLinear(nums.slice(0, n - 1));

    const option2 = robLinear(nums.slice(1));

    return Math.max(option1, option2);
}
