function countCoveredBuildings(n: number, buildings: number[][]): number {
    const rows = new Map<number, number[]>();
    const cols = new Map<number, number[]>();

    for (const [x, y] of buildings) {
        if (!rows.has(x)) rows.set(x, []);
        if (!cols.has(y)) cols.set(y, []);
        rows.get(x)!.push(y);
        cols.get(y)!.push(x);
    }

    for (const r of rows.values()) r.sort((a, b) => a - b);
    for (const c of cols.values()) c.sort((a, b) => a - b);

    let count = 0;

    function checkNeighbors(arr: number[], value: number): [boolean, boolean] {
        let left = 0, right = arr.length - 1, index = -1;

        while (left <= right) {
            const mid = (left + right) >> 1;
            if (arr[mid] === value) {
                index = mid;
                break;
            }
            if (arr[mid] < value) left = mid + 1;
            else right = mid - 1;
        }

        return [index > 0, index < arr.length - 1];
    }

    for (const [x, y] of buildings) {
        const row = rows.get(x)!;
        const col = cols.get(y)!;

        const [hasLeft, hasRight] = checkNeighbors(row, y);
        const [hasUp, hasDown] = checkNeighbors(col, x);

        if (hasLeft && hasRight && hasUp && hasDown) count++;
    }

    return count;
}
