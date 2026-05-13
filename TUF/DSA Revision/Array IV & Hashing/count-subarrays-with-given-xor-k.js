class Solution {
  subarraysWithXorK(nums, k) {
    const map = new Map();
    map.set(0, 1);

    let xor = 0;
    let count = 0;

    for (let num of nums) {
      xor ^= num;

      if (map.has(xor ^ k)) {
        count += map.get(xor ^ k);
      }

      map.set(xor, (map.get(xor) || 0) + 1);
    }

    return count;
  }
}
