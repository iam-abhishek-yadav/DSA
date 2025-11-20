function maxSubArray(nums: number[]): number {
  let curr: number = nums[0];
  let max: number = nums[0];

  for (let i: number = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    max = Math.max(max, curr);
  }

  return max;
}
