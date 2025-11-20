function intersectionSizeTwo(intervals: number[][]): number {
    if (intervals.length === 0) return 0;

  intervals.sort((x, y) => {
    if (x[1] !== y[1]) return x[1] - y[1];
    return y[0] - x[0];
  });

  let last1 = Number.MIN_SAFE_INTEGER;
  let last2 = Number.MIN_SAFE_INTEGER;
  let ans = 0;

  for (const [a, b] of intervals) {
    let count = 0;
    if (last2 >= a) count += 1;
    if (last1 >= a) count += 1;

    if (count >= 2) {
      continue;
    } else if (count === 1) {
      last2 = last1;
      last1 = b;
      ans += 1;
    } else {
      last2 = b - 1;
      last1 = b;
      ans += 2;
    }
  }

  return ans;
};
