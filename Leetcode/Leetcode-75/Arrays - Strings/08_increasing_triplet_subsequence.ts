function increasingTriplet(nums: number[]): boolean {
    let [min, secMin] = [Infinity, Infinity]
    for(const num of nums){
        if(num <= min){
            min = num
        } else if(num <= secMin){
            secMin = num
        } else return true
    }
    return false
};
