function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const num: number = nums[i];
        const complement: number = target - num;
        
        if (map.has(complement)) {
            return [map.get(complement) as number, i];
        }
        
        map.set(num, i);
    }
    
    return [];
}