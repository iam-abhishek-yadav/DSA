class Solution {
  findMissingRepeatingNumbers(nums) {
    let n = nums.length;

    let S = (n * (n + 1)) / 2;
    let S2 = (n * (n + 1) * (2 * n + 1)) / 6;

    let sum = 0,
      sumSq = 0;

    for (let num of nums) {
      sum += num;
      sumSq += num * num;
    }

    let diff = sum - S;
    let diffSq = sumSq - S2;

    let sumXY = diffSq / diff;

    let x = (diff + sumXY) / 2;
    let y = sumXY - x;

    return [x, y];
  }
}
