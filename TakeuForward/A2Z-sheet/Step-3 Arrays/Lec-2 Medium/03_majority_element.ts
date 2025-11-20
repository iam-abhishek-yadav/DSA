function majorityElement(nums: number[]): number {
  let ele: number = -Infinity;
  let cnt: number = 0;

  for (const num of nums) {
    if (cnt === 0) {
      ele = num;
      cnt = 1;
    } else if (ele === num) {
      cnt++;
    } else {
      cnt--;
    }
  }

  cnt = nums.reduce((count: number, num: number): number => {
    return count + (num === ele ? 1 : 0);
  }, 0);

  return cnt > Math.floor(nums.length / 2) ? ele : -1;
}
