class Solution {
    secondLargestElement(nums) {
        let max = -Infinity, secMax = -Infinity;
        for(const num of nums){
            if(num > max) {
                secMax = max;
                max = num;
            } else if(num < max && num > secMax){
                secMax = num;
            }
        }
        return secMax === -Infinity ? -1 : secMax;
    }
}