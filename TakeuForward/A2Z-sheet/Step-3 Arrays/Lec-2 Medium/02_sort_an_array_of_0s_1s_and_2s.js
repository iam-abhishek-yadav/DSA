class Solution {
    sortZeroOneTwo(nums) {
      let zero = 0;
      let one = 0;
      let two = nums.length - 1;
  
      while (one <= two) {
        if (nums[one] === 0) {
          [nums[zero], nums[one]] = [nums[one], nums[zero]];
          zero++;
          one++;
        } else if (nums[one] === 1) {
          one++;
        } else {
          [nums[one], nums[two]] = [nums[two], nums[one]];
          two--;
        }
      }
  
      return nums;
    }
  }
  