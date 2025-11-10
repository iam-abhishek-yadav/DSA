/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    maxProfit(arr) {
        if (!arr || arr.length === 0) return 0;

        // Initialize DP states
        let hold = -arr[0]; // profit when holding a stock
        let sold = 0;       // profit when just sold
        let rest = 0;       // profit when resting

        for (let i = 1; i < arr.length; i++) {
            const price = arr[i];

            const prevHold = hold;
            const prevSold = sold;
            const prevRest = rest;

            // Sell today
            sold = prevHold + price;

            // Hold today (either keep holding or buy today after resting)
            hold = Math.max(prevHold, prevRest - price);

            // Rest today (either keep resting or come from a sold day)
            rest = Math.max(prevRest, prevSold);
        }

        // Max profit: we can’t end while holding
        return Math.max(sold, rest);
    }
}