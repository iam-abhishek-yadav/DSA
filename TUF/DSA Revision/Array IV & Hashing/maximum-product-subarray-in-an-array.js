class Solution {
  maxProduct(nums) {
    let prefix = 1,
      suffix = 1;
    let maxProd = -Infinity;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
      if (prefix === 0) prefix = 1;
      if (suffix === 0) suffix = 1;

      prefix *= nums[i];
      suffix *= nums[n - 1 - i];

      maxProd = Math.max(maxProd, prefix, suffix);
    }

    return maxProd === 0 ? 0 : maxProd;
  }
}
