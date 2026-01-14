function moveZeroes(nums: number[]): void {
    let i = 0;
    for(let j=0;j<nums.length;j++){
        if(nums[j] !== 0){
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
        }
    }
};
