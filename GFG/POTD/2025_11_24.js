class Solution {
    secondMST(V, edges) {
        const E = edges.length;

        const e = edges.map(x => ({ u: x[0], v: x[1], w: x[2] }));
        e.sort((a, b) => a.w - b.w);

        class DSU {
            constructor(n) {
                this.p = Array.from({ length: n }, (_, i) => i);
                this.r = Array(n).fill(0);
            }
            find(x) {
                return this.p[x] === x ? x : (this.p[x] = this.find(this.p[x]));
            }
            unite(a, b) {
                a = this.find(a);
                b = this.find(b);
                if (a === b) return false;
                if (this.r[a] < this.r[b]) [a, b] = [b, a];
                this.p[b] = a;
                if (this.r[a] === this.r[b]) this.r[a]++;
                return true;
            }
        }

        const d1 = new DSU(V);
        const mstIndex = [];
        let mstWeight = 0;

        for (let i = 0; i < E; i++) {
            if (d1.unite(e[i].u, e[i].v)) {
                mstWeight += e[i].w;
                mstIndex.push(i);
            }
        }

        if (mstIndex.length !== V - 1) return -1;

        let answer = Infinity;

        for (let skip of mstIndex) {
            const d2 = new DSU(V);
            let curWeight = 0, used = 0;

            for (let i = 0; i < E; i++) {
                if (i === skip) continue;
                if (d2.unite(e[i].u, e[i].v)) {
                    curWeight += e[i].w;
                    used++;
                    if (curWeight >= answer) break;
                }
            }

            if (used === V - 1 && curWeight > mstWeight)
                answer = Math.min(answer, curWeight);
        }

        return answer === Infinity ? -1 : answer;
    }
}
