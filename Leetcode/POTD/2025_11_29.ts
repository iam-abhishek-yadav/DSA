function minOperations(nums: number[], k: number): number {
  const sum: number = nums.reduce((num, total) => (total += num), 0);
  return sum % k;
}
