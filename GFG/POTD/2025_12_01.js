class Solution {
    cntPairs(arr, k) {
        class Node {
            constructor() {
                this.c = [null, null];
                this.cnt = 0;
            }
        }

        const root = new Node();
        const HIGH = 15;

        const insert = (num) => {
            let cur = root;
            for (let i = HIGH; i >= 0; i--) {
                const b = (num >> i) & 1;
                if (!cur.c[b]) cur.c[b] = new Node();
                cur = cur.c[b];
                cur.cnt++;
            }
        };

        const countLess = (num, k) => {
            let cur = root, res = 0;
            for (let i = HIGH; i >= 0; i--) {
                if (!cur) break;
                const b = (num >> i) & 1;
                const bk = (k >> i) & 1;
                if (bk === 1) {
                    if (cur.c[b]) res += cur.c[b].cnt;
                    cur = cur.c[1 - b];
                } else {
                    cur = cur.c[b];
                }
            }
            return res;
        };

        let ans = 0;
        for (let x of arr) {
            ans += countLess(x, k);
            insert(x);
        }
        return ans;
    }
}
