function numSub(s: string): number {
    const MOD: number = 1_000_000_007;
    let res: number = 0;
    let run: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            run++;
            res += run;
            if (res >= MOD) res -= MOD;
        } else {
            run = 0;
        }
    }

    return res;
}
