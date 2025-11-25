class Solution {
  subarrayXor(arr) {
    const n = arr.length;
    if ((n & 1) === 0) return 0;

    let result = 0;
    for (let i = 0; i < n; i += 2) {
      result ^= arr[i];
    }
    return result;
  }
}
