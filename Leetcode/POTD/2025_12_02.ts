function countTrapezoids(points: number[][]): number {
    const mod = 1_000_000_007;
    const n = points.length;
    const y = new Array<number>(n);
    for (let i = 0; i < n; i++) y[i] = points[i][1];
    y.sort((a, b) => a - b);

    let sum = 0n, c2 = 0n;
    let f = 1n, prev = BigInt(y[0]);

    for (let i = 1; i < n; i++) {
        if (prev === BigInt(y[i])) f++;
        else {
            const c = (f * (f - 1n)) / 2n;
            sum += c;
            c2 += c * c;
            f = 1n;
            prev = BigInt(y[i]);
        }
    }

    const c = (f * (f - 1n)) / 2n;
    sum += c;
    c2 += c * c;

    const ans = ((sum * sum - c2) / 2n) % BigInt(mod);
    return Number((ans + BigInt(mod)) % BigInt(mod));
};