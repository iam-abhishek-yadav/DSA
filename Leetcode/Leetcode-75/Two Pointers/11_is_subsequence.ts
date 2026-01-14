function isSubsequence(s: string, t: string): boolean {
    let left = 0, right = 0;
    while(left < s.length && right < t.length){
        if(s[left] === t[right]){
            left++;
        }
        right++;
    }
    return left === s.length;
};
