class Solution {
  missingNumber(nums) {
    const actualSum = nums.reduce((num, total) => (total += num), 0);
    const expectedSum = (nums.length * (nums.length + 1)) / 2;
    return expectedSum - actualSum;
  }
}
