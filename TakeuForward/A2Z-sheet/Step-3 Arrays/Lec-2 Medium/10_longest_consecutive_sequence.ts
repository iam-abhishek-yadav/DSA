function longestConsecutive(nums: number[]): number {
    let max: number = 0;
    const set: Set<number> = new Set(nums);
    for(let num of set){
        if(!set.has(num - 1)){
            let curr: number = 1;
            while(set.has(num + 1)){
                num++;
                curr++;
            }
            max = Math.max(max, curr);
        }
    }
    return max;
};