class Solution {
    longestSubarray(nums, k) {
        let prefix = 0;
        let max = 0;
        const map = new Map();

        map.set(0, -1);

        for (let i = 0; i < nums.length; i++) {
            prefix += nums[i];

            if (map.has(prefix - k)) {
                max = Math.max(max, i - map.get(prefix - k));
            }

            if (!map.has(prefix)) {
                map.set(prefix, i);
            }
        }

        return max;
    }
}
