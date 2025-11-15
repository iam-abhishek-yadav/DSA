function check(nums: number[]): boolean {
    let cnt: number = 0;

    for (let i: number = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) {
            cnt++;
            if (cnt > 1) return false;
        }
    }

    return cnt === 0 ? true : nums[nums.length - 1] <= nums[0];
}
