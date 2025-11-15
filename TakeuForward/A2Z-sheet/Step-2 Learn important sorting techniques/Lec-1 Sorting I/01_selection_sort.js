class Solution {
    selectionSort(nums) {
        for (let i = 0; i < nums.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] < nums[minIndex]) {
                    minIndex = j;
                }
            }
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
        }
        return nums;
    }
}
