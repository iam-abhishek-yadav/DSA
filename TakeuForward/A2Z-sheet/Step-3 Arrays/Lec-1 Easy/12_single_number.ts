function singleNumber(nums: number[]): number {
    return nums.reduce(
        (acc: number, num: number) => acc ^ num,
        0
    );
}
