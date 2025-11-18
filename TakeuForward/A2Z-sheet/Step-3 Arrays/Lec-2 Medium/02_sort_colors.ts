function sortColors(nums: number[]): void {
    let zero: number = 0, one: number = 0, two: number = nums.length - 1;
    while (one <= two) {
        if (nums[one] === 0) {
            [nums[one], nums[zero]] = [nums[zero], nums[one]]
            one++
            zero++
        } else if (nums[one] === 1) {
            one++
        } else {
            [nums[one], nums[two]] = [nums[two], nums[one]]
            two--
        }
    }
};