function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = Math.max(...candies);
    const res = [];
    for(const candy of candies){
        if(candy + extraCandies >= max) res.push(true)
        else res.push(false)
    }
    return res
};  