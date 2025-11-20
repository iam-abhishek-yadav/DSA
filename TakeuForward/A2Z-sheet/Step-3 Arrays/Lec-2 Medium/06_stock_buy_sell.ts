function maxProfit(prices: number[]): number {
  let minPrice: number = prices[0];
  let maxProfit: number = 0;

  for (let i: number = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
}
