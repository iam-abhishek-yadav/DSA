class Solution {
    countDigit(n) {
        if(n === 0) return 1
        let digits = 0
        while(n > 0){
            digits++;
            n = Math.floor(n / 10);
        }
        return digits;
    }
}