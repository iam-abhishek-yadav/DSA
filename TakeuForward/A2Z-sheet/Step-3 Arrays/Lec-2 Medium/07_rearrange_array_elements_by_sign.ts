function rearrangeArray(nums: number[]): number[] {
  let pos: number = 0;
  let neg: number = 1;

  const arr: number[] = new Array<number>(nums.length).fill(0);

  for (const num of nums as number[]) {
    if (num < 0) {
      arr[neg] = num;
      neg += 2;
    } else {
      arr[pos] = num;
      pos += 2;
    }
  }

  return arr;
}