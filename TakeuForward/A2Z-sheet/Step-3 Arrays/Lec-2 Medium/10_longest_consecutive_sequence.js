class Solution {
  longestConsecutive(nums) {
    let max = 0;
    const set = new Set(nums);
    for (let num of set) {
      if (!set.has(num - 1)) {
        let curr = 1;
        while (set.has(num + 1)) {
          num++;
          curr++;
        }
        max = Math.max(max, curr);
      }
    }
    return max;
  }
}
