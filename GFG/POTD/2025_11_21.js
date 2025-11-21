class Solution {
    shortestPath(V, a, b, edges) {
        const adj = Array.from({ length: V }, () => []);
        for (const [x, y, w1] of edges) {
            adj[x].push([y, w1]);
            adj[y].push([x, w1]);
        }

        const dijkstra = (src) => {
            const dist = Array(V).fill(Infinity);
            dist[src] = 0;
            const pq = new MinHeap();
            pq.push([src, 0]);

            while (!pq.isEmpty()) {
                const [node, d] = pq.pop();
                if (d !== dist[node]) continue;
                for (const [nbr, w] of adj[node]) {
                    if (dist[nbr] > d + w) {
                        dist[nbr] = d + w;
                        pq.push([nbr, dist[nbr]]);
                    }
                }
            }
            return dist;
        };

        const distA = dijkstra(a);
        const distB = dijkstra(b);

        let ans = distA[b];
        for (const [x, y, w1, w2] of edges) {
            if (distA[x] !== Infinity && distB[y] !== Infinity) {
                ans = Math.min(ans, distA[x] + w2 + distB[y]);
            }
            if (distA[y] !== Infinity && distB[x] !== Infinity) {
                ans = Math.min(ans, distA[y] + w2 + distB[x]);
            }
        }
        return ans === Infinity ? -1 : ans;
    }
}

class MinHeap {
    constructor() {
        this.h = [];
    }
    push(x) {
        this.h.push(x);
        this._up(this.h.length - 1);
    }
    pop() {
        if (this.h.length === 0) return null;
        const top = this.h[0];
        const last = this.h.pop();
        if (this.h.length > 0) {
            this.h[0] = last;
            this._down(0);
        }
        return top;
    }
    _up(i) {
        const h = this.h;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (h[p][1] <= h[i][1]) break;
            [h[p], h[i]] = [h[i], h[p]];
            i = p;
        }
    }
    _down(i) {
        const h = this.h;
        const n = h.length;
        while (true) {
            let l = 2 * i + 1;
            let r = 2 * i + 2;
            let s = i;
            if (l < n && h[l][1] < h[s][1]) s = l;
            if (r < n && h[r][1] < h[s][1]) s = r;
            if (s === i) break;
            [h[i], h[s]] = [h[s], h[i]];
            i = s;
        }
    }
    isEmpty() {
        return this.h.length === 0;
    }
}
