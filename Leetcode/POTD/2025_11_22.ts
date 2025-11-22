var minimumOperations = function(nums) {
    let count = 0;
    for(const num of nums){
        if(num % 3 !== 0) count++;
    }
    return count;
};