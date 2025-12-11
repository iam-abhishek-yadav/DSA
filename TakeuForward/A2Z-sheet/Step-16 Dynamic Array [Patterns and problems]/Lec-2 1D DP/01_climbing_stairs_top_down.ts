function climbStairs(n: number): number {
    const memo: Record<number, number> = {};

    function solve(k: number): number {
        if (k <= 2) return k;
        if (memo[k] !== undefined) return memo[k];

        memo[k] = solve(k - 1) + solve(k - 2);
        return memo[k];
    }

    return solve(n);
}
