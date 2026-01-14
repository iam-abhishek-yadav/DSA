// function reverseWords(s: string): string {
//     return s.trim().split(/\s+/).reverse().join(" ");
// }

function reverseWords(s: string): string {
    let res = "";
    let startIndex = s.length-1;
    while(startIndex >= 0){
        while(startIndex >= 0 && s[startIndex] === " "){
            startIndex--
        }
        if(startIndex < 0) break;
        const endIndex = startIndex
        while(startIndex >= 0 && s[startIndex - 1] !== " "){
            startIndex--
        }
        if(res.length === 0){
            res += s.substring(startIndex, endIndex + 1);
        } else res += " " + s.substring(startIndex, endIndex + 1);
        startIndex--
    }
    return res;
};
