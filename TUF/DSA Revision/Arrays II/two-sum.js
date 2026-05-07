class Solution {
  twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const req = target - nums[i];
      if (map.has(req)) return [i, map.get(req)];
      map.set(nums[i], i);
    }
    return [-1, -1];
  }
}
