class Solution {
    houseRobber(money) {
        const n = money.length;
        if (n === 1) return money[0];

        function robLinear(arr) {
            let prev2 = 0;
            let prev1 = arr[0];

            for (let i = 1; i < arr.length; i++) {
                const curr = Math.max(prev1, prev2 + arr[i]);
                prev2 = prev1;
                prev1 = curr;
            }
            return prev1;
        }

        const option1 = robLinear(money.slice(0, n - 1));

        const option2 = robLinear(money.slice(1));

        return Math.max(option1, option2);
    }
}