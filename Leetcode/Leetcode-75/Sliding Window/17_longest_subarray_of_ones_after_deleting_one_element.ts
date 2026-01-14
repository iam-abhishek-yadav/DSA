function longestSubarray(nums: number[]): number {
    let left = 0, zero = 0, ans = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zero++;

        while (zero > 1) {
            if (nums[left++] === 0) zero--;
        }

        ans = Math.max(ans, right - left);
    }

    return ans;
}

