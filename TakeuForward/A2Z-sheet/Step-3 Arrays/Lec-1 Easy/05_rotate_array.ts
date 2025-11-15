function rotate(nums: number[], k: number): void {
    k = k % nums.length;

    const reverse = (left: number, right: number): void => {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    };

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
}
