function mergeAlternately(word1: string, word2: string): string {
    let left = 0, right = 0;
    let res = "";
    while(left < word1.length && right < word2.length){
        res += word1[left++] + word2[right++]
    }
    return res + word1.slice(left) + word2.slice(right)
};