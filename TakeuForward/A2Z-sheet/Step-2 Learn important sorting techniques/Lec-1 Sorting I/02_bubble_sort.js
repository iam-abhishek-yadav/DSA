class Solution {
    bubbleSort(nums) {
        for (let i = 0; i < nums.length - 1; i++) {
            let noSwaps = true;
            for (let j = 0; j < nums.length - i - 1; j++) {
                if (nums[j] > nums[j + 1]) {
                    noSwaps = false;
                    [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                }
            }
            if (noSwaps) break;
        }
        return nums;
    }
}