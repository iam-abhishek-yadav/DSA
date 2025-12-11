function rob(nums: number[]): number {
    const n = nums.length;
    if (n === 1) return nums[0];

    function robRange(start: number, end: number): number {
        const memo: Record<number, number> = {};

        function solve(i: number): number {
            if (i < start) return 0;
            if (memo[i] !== undefined) return memo[i];

            memo[i] = Math.max(
                solve(i - 1),
                nums[i] + solve(i - 2)
            );
            return memo[i];
        }

        return solve(end);
    }

    const option1 = robRange(0, n - 2);

    const option2 = robRange(1, n - 1);

    return Math.max(option1, option2);
}
