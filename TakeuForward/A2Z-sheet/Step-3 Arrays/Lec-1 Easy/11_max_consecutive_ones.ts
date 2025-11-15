function findMaxConsecutiveOnes(nums: number[]): number {
    let max: number = 0;
    let current: number = 0;

    for (const num of nums as number[]) {
        if (num === 1) {
            current++;
        } else {
            max = Math.max(max, current);
            current = 0;
        }
    }

    return Math.max(max, current);
}
