/**
 * @param {string} s
 * @return {number}
 */

class Solution {
    countSubs(s) {
        const sa = [];
        let last = 0;
    
        sa.push({ next: {}, link: -1, len: 0 });
    
        function extend(ch) {
            const cur = sa.length;
            sa.push({ next: {}, link: 0, len: sa[last].len + 1 });
    
            let p = last;
            while (p !== -1 && !(ch in sa[p].next)) {
                sa[p].next[ch] = cur;
                p = sa[p].link;
            }
    
            if (p === -1) {
                sa[cur].link = 0;
            } else {
                const q = sa[p].next[ch];
                if (sa[p].len + 1 === sa[q].len) {
                    sa[cur].link = q;
                } else {
                    const clone = sa.length;
                    sa.push({
                        next: { ...sa[q].next },
                        link: sa[q].link,
                        len: sa[p].len + 1
                    });
    
                    while (p !== -1 && sa[p].next[ch] === q) {
                        sa[p].next[ch] = clone;
                        p = sa[p].link;
                    }
    
                    sa[q].link = sa[cur].link = clone;
                }
            }
    
            last = cur;
        }
    
        for (const ch of s) extend(ch);
    
        let ans = 0;
        for (const st of sa) {
            if (st.link !== -1) {
                ans += st.len - sa[st.link].len;
            }
        }
        return ans;
    }
}