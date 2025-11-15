function removeDuplicates(nums: number[]): number {
    let index: number = 0;
    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] !== nums[index]) {
            index++;
            nums[index] = nums[i]
        }
    }
    return index + 1;
};