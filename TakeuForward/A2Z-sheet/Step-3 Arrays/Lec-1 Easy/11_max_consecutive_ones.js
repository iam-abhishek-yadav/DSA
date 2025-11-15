class Solution {
  findMaxConsecutiveOnes(nums) {
    let max = 0,
      current = 0;
    for (const num of nums) {
      if (num === 1) current++;
      else {
        max = Math.max(max, current);
        current = 0;
      }
    }
    return Math.max(max, current);
  }
}
