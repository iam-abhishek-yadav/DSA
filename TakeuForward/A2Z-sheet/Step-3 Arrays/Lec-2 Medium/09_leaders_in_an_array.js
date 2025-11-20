class Solution {
  leaders(nums) {
    const res = [];
    let max = -Infinity;
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] > max) {
        max = nums[i];
        res.unshift(nums[i]);
      }
    }
    return res;
  }
}
