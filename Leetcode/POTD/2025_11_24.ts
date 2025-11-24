function prefixesDivBy5(nums: number[]): boolean[] {
    const result: boolean[] = [];
    let mod: number = 0;

    for (let b of nums) {
        mod = (mod * 2 + b) % 5;
        result.push(mod === 0);
    }

    return result;
};