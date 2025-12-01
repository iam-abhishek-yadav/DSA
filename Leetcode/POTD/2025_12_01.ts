function maxRunTime(n: number, batteries: number[]): number {
    let sum = 0;
    for (const b of batteries) sum += b;

    let l = 0;
    let r = Math.floor(sum / n);
    let ans = 0;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        let reserve = 0;
        for (const x of batteries) {
            reserve += Math.min(x, mid);
        }

        if (reserve >= mid * n) {
            ans = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return ans;
}
