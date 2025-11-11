class Spreadsheet {
    private rows: number;
    private cols: number;
    private cells: Map<string, number>;

    constructor(rows: number) {
        this.rows = rows;
        this.cols = 26; // A–Z columns
        this.cells = new Map<string, number>();
    }

    setCell(cell: string, value: number): void {
        this.cells.set(cell, value);
    }

    resetCell(cell: string): void {
        this.cells.set(cell, 0);
    }

    getValue(formula: string): number {
        const parts = formula.slice(1).split("+");
        let sum = 0;

        for (let part of parts) {
            part = part.trim();
            if (!isNaN(Number(part))) {
                sum += Number(part);
            } else {
                const val = this.cells.get(part) ?? 0;
                sum += val;
            }
        }

        return sum;
    }
}