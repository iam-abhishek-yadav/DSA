class Solution {
    countFrequencies(nums) {
        const map = new Map();

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        return Array.from(map.entries());
    }
}
