class Solution {
  stockBuySell(arr, n) {
    let minPrice = arr[0],
      maxProfit = 0;
    for (let i = 1; i < arr.length; i++) {
      maxProfit = Math.max(maxProfit, arr[i] - minPrice);
      minPrice = Math.min(minPrice, arr[i]);
    }
    return maxProfit;
  }
}