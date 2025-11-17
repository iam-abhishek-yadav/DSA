function kLengthApart(nums: number[], k: number): boolean {
    let lastIndex: number = -1;

    for (let i: number = 0; i < nums.length; i++) {
        const current: number = nums[i];

        if (current === 1) {
            if (lastIndex !== -1 && i - lastIndex <= k) {
                return false;
            }
            lastIndex = i;
        }
    }

    return true;
}
