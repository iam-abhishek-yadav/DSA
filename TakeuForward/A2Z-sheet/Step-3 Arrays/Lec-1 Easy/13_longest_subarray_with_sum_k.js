class Solution {
  longestSubarray(nums, k) {
    let max = 0,
      sum = 0,
      left = 0,
      right = 0;

    while (right < nums.length) {
      sum += nums[right];

      while (sum > k) {
        sum -= nums[left];
        left++;
      }

      if (sum === k) {
        max = Math.max(max, right - left + 1);
      }

      right++;
    }

    return max;
  }
}
