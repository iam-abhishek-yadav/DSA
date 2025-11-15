class Solution {
  singleNumber(nums) {
    return nums.reduce((num, res) => (num ^= res), 0);
  }
}
