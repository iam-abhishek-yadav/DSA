class Solution {
  quickSort(nums) {
    this.sort(nums, 0, nums.length - 1);
    return nums;
  }

  sort(nums, low, high) {
    if (low >= high) return;

    const pivot = this.partition(nums, low, high);

    this.sort(nums, low, pivot - 1);
    this.sort(nums, pivot + 1, high);
  }

  partition(nums, low, high) {
    const pivot = nums[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (nums[j] < pivot) {
        i++;
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }

    [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
    return i + 1;
  }
}
