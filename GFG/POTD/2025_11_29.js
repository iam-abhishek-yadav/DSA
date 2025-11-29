class Solution {
  countSetBits(N) {
    if (N === 0) return 0;
    if (N === 1) return 1;

    let x = Math.floor(Math.log2(N));
    let bitsUpTo2x = x * (1 << (x - 1));
    let msbBits = N - (1 << x) + 1;
    let rest = N - (1 << x);

    return bitsUpTo2x + msbBits + this.countSetBits(rest);
  }
}
