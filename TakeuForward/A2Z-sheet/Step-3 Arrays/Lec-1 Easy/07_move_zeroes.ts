function moveZeroes(nums: number[]): void {
    let index: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            index++;
        }
    }
};