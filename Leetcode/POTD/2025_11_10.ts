function minOperations(nums: number[]): number {
    const stack: number[] = [];
    let operationsCount: number = 0;

    for (const currentNum of nums) {
        while (stack.length > 0 && stack[stack.length - 1] > currentNum) {
            stack.pop();
        }

        if (currentNum === 0) continue;

        if (stack.length === 0 || stack[stack.length - 1] < currentNum) {
            operationsCount++;
            stack.push(currentNum);
        }
    }

    return operationsCount;
};