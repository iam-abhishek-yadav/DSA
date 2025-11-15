function missingNumber(nums: number[]): number {
    const actualSum: number = nums.reduce(
        (acc: number, num: number) => acc + num,
        0
    );

    const expectedSum: number = (nums.length * (nums.length + 1)) / 2;

    return expectedSum - actualSum;
}
