function minSubarray(nums: number[], p: number): number {
    let totalSum: number = 0;
    for (const num of nums) totalSum += num;

    const remainderNeeded: number = totalSum % p;
    if (remainderNeeded === 0) return 0;

    const prefixIndexMap: Map<number, number> = new Map();
    prefixIndexMap.set(0, -1);

    let runningPrefixMod: number = 0;
    let minLength: number = nums.length;

    for (let i = 0; i < nums.length; i++) {
        runningPrefixMod = (runningPrefixMod + nums[i]) % p;

        const requiredPrefix: number = (runningPrefixMod - remainderNeeded + p) % p;

        if (prefixIndexMap.has(requiredPrefix)) {
            const prevIndex = prefixIndexMap.get(requiredPrefix)!;
            minLength = Math.min(minLength, i - prevIndex);
        }

        prefixIndexMap.set(runningPrefixMod, i);
    }

    return minLength === nums.length ? -1 : minLength;
};