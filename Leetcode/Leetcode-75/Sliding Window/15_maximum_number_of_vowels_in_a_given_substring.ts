function maxVowels(s: string, k: number): number {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let max = 0, cnt = 0;
    for(let i=0;i<k;i++){
        if(vowels.has(s[i])) cnt++;
    }
    max = cnt;
    for(let i=k;i<s.length;i++){
        if(vowels.has(s[i-k])) cnt--;
        if(vowels.has(s[i])) cnt++;
        max = Math.max(max, cnt);
    }
    return max;
};
