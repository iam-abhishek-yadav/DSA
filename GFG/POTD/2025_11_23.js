class Solution {
    maxRemove(stones) {
        const MAX = 20005;
        const OFFSET = 10001;
        const parent = new Array(MAX);
        const rank = new Array(MAX);

        for (let i = 0; i < MAX; i++) {
            parent[i] = i;
            rank[i] = 0;
        }

        const find = (x) => {
            while (parent[x] !== x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };

        const union = (a, b) => {
            let pa = find(a);
            let pb = find(b);
            if (pa === pb) return;
            if (rank[pa] < rank[pb]) parent[pa] = pb;
            else if (rank[pb] < rank[pa]) parent[pb] = pa;
            else {
                parent[pb] = pa;
                rank[pa]++;
            }
        };

        const used = new Set();

        for (let [x, y] of stones) {
            let row = x;
            let col = y + OFFSET;
            union(row, col);
            used.add(row);
            used.add(col);
        }

        const roots = new Set();
        for (let node of used) {
            roots.add(find(node));
        }

        return stones.length - roots.size;
    }
}
