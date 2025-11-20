function nextPermutation(nums: number[]): void {
  let index: number = -1;

  const reverse = (left: number, right: number): void => {
    while (left < right) {
      const temp: number = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  };

  for (let i: number = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    reverse(0, nums.length - 1);
  } else {
    for (let i: number = nums.length - 1; i > index; i--) {
      if (nums[i] > nums[index]) {
        const temp: number = nums[i];
        nums[i] = nums[index];
        nums[index] = temp;
        break;
      }
    }
    reverse(index + 1, nums.length - 1);
  }
}
