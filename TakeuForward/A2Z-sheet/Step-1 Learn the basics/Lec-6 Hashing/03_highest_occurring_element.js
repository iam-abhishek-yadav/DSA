class Solution {
    mostFrequentElement(nums) {
        const map = new Map();
        let maxFreq = 0;
        let result = nums[0];

        for (const num of nums) {
            const freq = (map.get(num) || 0) + 1;
            map.set(num, freq);

            if (freq > maxFreq) {
                maxFreq = freq;
                result = num;
            }
        }

        return result;
    }
}
