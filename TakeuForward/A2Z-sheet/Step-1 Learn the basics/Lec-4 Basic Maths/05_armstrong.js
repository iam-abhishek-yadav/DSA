class Solution {
    isArmstrong(n) {
        const originalNum = n;
        const numDigits = String(n).length;
        let sum = 0;

        while (n > 0) {
            const digit = n % 10;
            sum += Math.pow(digit, numDigits);
            n = Math.floor(n / 10);
        }

        return sum === originalNum;
    }
}
