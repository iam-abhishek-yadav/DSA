function maxSumDivThree(nums: number[]): number {
    let total = 0;
    const rem1: number[] = [];
    const rem2: number[] = [];

    for (const num of nums) {
        total += num;
        if (num % 3 === 1) rem1.push(num);
        else if (num % 3 === 2) rem2.push(num);
    }

    rem1.sort((a, b) => a - b);
    rem2.sort((a, b) => a - b);

    if (total % 3 === 0) return total;

    const INF = Number.POSITIVE_INFINITY;

    if (total % 3 === 1) {
        const option1 = rem1.length > 0 ? rem1[0] : INF;
        const option2 = rem2.length > 1 ? rem2[0] + rem2[1] : INF;
        return total - Math.min(option1, option2);
    }

    const option1 = rem2.length > 0 ? rem2[0] : INF;
    const option2 = rem1.length > 1 ? rem1[0] + rem1[1] : INF;
    return total - Math.min(option1, option2);
};