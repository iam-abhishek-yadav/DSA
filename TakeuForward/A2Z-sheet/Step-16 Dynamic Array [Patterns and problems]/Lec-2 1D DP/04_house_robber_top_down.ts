function rob(nums: number[]): number {
    const memo: Record<number, number> = {};

    function solve(i: number): number {
        if (i < 0) return 0;
        if (memo[i] !== undefined) return memo[i];

        memo[i] = Math.max(
            solve(i - 1),
            nums[i] + solve(i - 2)
        );

        return memo[i];
    }

    return solve(nums.length - 1);
}
