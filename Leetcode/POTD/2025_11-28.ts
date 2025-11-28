function maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const parent: Int32Array = new Int32Array(n).fill(-1);
    const stack: number[] = [0];
    const order: number[] = [];
    parent[0] = -2;

    while (stack.length) {
        const node = stack.pop()!;
        order.push(node);
        for (const nei of adj[node]) {
            if (parent[nei] === -1) {
                parent[nei] = node;
                stack.push(nei);
            }
        }
    }

    const subtreeMod: number[] = new Array(n).fill(0);
    let cuts = 0;

    for (let i = order.length - 1; i >= 0; --i) {
        const node = order[i];
        let sumMod = ((values[node] % k) + k) % k;

        for (const nei of adj[node]) {
            if (parent[nei] === node) {
                sumMod = (sumMod + subtreeMod[nei]) % k;
            }
        }

        subtreeMod[node] = sumMod;

        if (node !== 0 && sumMod === 0) {
            cuts += 1;
        }
    }

    return cuts + 1;
};