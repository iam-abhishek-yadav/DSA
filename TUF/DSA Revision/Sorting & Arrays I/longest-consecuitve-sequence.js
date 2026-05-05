class Solution {
  longestConsecutive(nums) {
    const set = new Set(nums);
    let max = 0;
    for (const num of nums) {
      if (!set.has(num - 1)) {
        let curr = 1;
        let x = num;

        while (set.has(x + 1)) {
          x++;
          curr++;
        }

        max = Math.max(max, curr);
      }
    }
    return max;
  }
}
