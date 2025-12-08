function countTriples(n: number): number {
    let count = 0;

    const sq = new Array(n + 1);
    for (let i = 1; i <= n; i++) sq[i] = i * i;

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            const sum = sq[a] + sq[b];
            const c = Math.sqrt(sum);

            if (Number.isInteger(c) && c <= n) {
                count++;
            }
        }
    }

    return count;
};
