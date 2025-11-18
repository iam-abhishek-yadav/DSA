class Solution {
    countPaths(V, edges) {
        const graph = Array.from({ length: V }, () => []);
        for (const [u, v, w] of edges) {
            graph[u].push([v, w]);
            graph[v].push([u, w]);
        }

        const dist = Array(V).fill(Infinity);
        const ways = Array(V).fill(0);

        dist[0] = 0;
        ways[0] = 1;

        const heap = new MinHeap();
        heap.push([0, 0]);

        while (!heap.isEmpty()) {
            const [d, node] = heap.pop();

            if (d > dist[node]) continue;

            for (const [next, wt] of graph[node]) {
                const newDist = d + wt;

                if (newDist < dist[next]) {
                    dist[next] = newDist;
                    ways[next] = ways[node];
                    heap.push([newDist, next]);
                } else if (newDist === dist[next]) {
                    ways[next] += ways[node];
                }
            }
        }

        return ways[V - 1];
    }
}

class MinHeap {
    constructor() {
        this.data = [];
    }

    push(val) {
        this.data.push(val);
        this._bubbleUp(this.data.length - 1);
    }

    pop() {
        if (this.data.length === 1) return this.data.pop();
        const top = this.data[0];
        this.data[0] = this.data.pop();
        this._bubbleDown(0);
        return top;
    }

    isEmpty() {
        return this.data.length === 0;
    }

    _bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.data[parent][0] <= this.data[index][0]) break;
            [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
            index = parent;
        }
    }

    _bubbleDown(index) {
        const n = this.data.length;
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            if (left < n && this.data[left][0] < this.data[smallest][0]) smallest = left;
            if (right < n && this.data[right][0] < this.data[smallest][0]) smallest = right;
            if (smallest === index) break;
            [this.data[smallest], this.data[index]] = [this.data[index], this.data[smallest]];
            index = smallest;
        }
    }
}
