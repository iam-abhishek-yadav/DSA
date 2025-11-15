class Solution {
    bubbleSort(nums) {
        function sort(nums, n) {
            if (n <= 1) return;
            for (let i = 0; i < n - 1; i++) {
                if (nums[i] > nums[i + 1]) {
                    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                }
            }
            sort(nums, n - 1);
        }
        sort(nums, nums.length);
        return nums;
    }
}
