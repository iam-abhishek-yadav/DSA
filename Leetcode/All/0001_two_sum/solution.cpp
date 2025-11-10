class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;

        for (int i = 0; i < nums.size(); i++) {
            int num = nums[i];
            int complement = target - num;

            if (map.find(complement) != map.end()) {
                return { map[complement], i };
            }

            map[num] = i;
        }

        return {};
    }
};
