function maxSubarraySum(nums: number[], k: number): number {
    const n = nums.length;
    let prefix = 0;
    const INF = Number.POSITIVE_INFINITY;
    const minPrefix = new Array<number>(k).fill(INF);

    minPrefix[0] = 0;

    let ans = Number.NEGATIVE_INFINITY;

    for (let j = 1; j <= n; j++) {
        prefix += nums[j - 1];
        const r = j % k;
        if (minPrefix[r] !== INF) {
            const candidate = prefix - minPrefix[r];
            if (candidate > ans) ans = candidate;
        }
        if (prefix < minPrefix[r]) minPrefix[r] = prefix;
    }
    return ans;
};