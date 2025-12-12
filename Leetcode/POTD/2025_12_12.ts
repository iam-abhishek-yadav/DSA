function countMentions(total: number, logs: string[][]): number[] {
    let res = new Array(total).fill(0);
    let state = new Map<string, string>(
        Array(total).fill(0).map((_, i) => ["" + i, "ON"])
    );

    logs.sort((a, b) => {
        let x = Number(a[1]);
        let y = Number(b[1]);
        if (x !== y) return x - y;
        if (a[0] === "OFFLINE" && b[0] === "MESSAGE") return -1;
        if (a[0] === "MESSAGE" && b[0] === "OFFLINE") return 1;
        return 0;
    });

    let incAll = () => {
        for (let i = 0; i < total; i++) res[i] += 1;
    };

    let refresh = (t: number) => {
        for (let [u, s] of state) {
            if (s !== "ON") {
                let d = t - Number(s.split(" ")[1]);
                if (d >= 60) state.set(u, "ON");
            }
        }
    };

    let incOnline = () => {
        for (let [u, s] of state) {
            if (s === "ON") res[Number(u)] += 1;
        }
    };

    let incIds = (str: string) => {
        let ids = str.split(" ");
        for (let id of ids) {
            res[Number(id.slice(2))] += 1;
        }
    };

    for (let ev of logs) {
        if (ev[0] === "MESSAGE") {
            refresh(Number(ev[1]));
            if (ev[2] === "ALL") incAll();
            else if (ev[2] === "HERE") incOnline();
            else incIds(ev[2]);
        } else {
            state.set(ev[2], "OFF " + ev[1]);
        }
    }

    return res;
}
