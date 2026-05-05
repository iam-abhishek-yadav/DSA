class Solution {
  maxSubArray(nums) {
    let max = -Infinity,
      curr = 0;
    for (const num of nums) {
      curr += num;
      if (curr < num) curr = num;
      max = Math.max(max, curr);
    }
    return max;
  }
}
