class Solution {
  andInRange(l, r) {
    let shift = 0;

    while (l !== r) {
      l >>= 1;
      r >>= 1;
      shift++;
    }

    return l << shift;
  }
}
