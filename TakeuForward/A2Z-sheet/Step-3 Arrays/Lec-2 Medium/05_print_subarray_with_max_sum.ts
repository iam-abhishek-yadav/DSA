function maxSubArray(nums: number[]): void {
  let currSum: number = nums[0];
  let currStart: number = 0;

  let maxSum: number = nums[0];
  let bestStart: number = 0;
  let bestEnd: number = 0;

  for (let i: number = 1; i < nums.length; i++) {
    if (nums[i] > currSum + nums[i]) {
      currSum = nums[i];
      currStart = i;
    } else {
      currSum += nums[i];
    }

    if (currSum > maxSum) {
      maxSum = currSum;
      bestStart = currStart;
      bestEnd = i;
    }
  }

  const subarray: number[] = nums.slice(bestStart, bestEnd + 1);
  console.log(subarray);
}
