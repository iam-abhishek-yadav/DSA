function rangeAddQueries(n: number, queries: number[][]): number[][] {
    const matrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < queries.length; i++) {
        const [rowStart, colStart, rowEnd, colEnd] = queries[i];

        for (let row = rowStart; row <= rowEnd; row++) {
            for (let col = colStart; col <= colEnd; col++) {
                matrix[row][col] += 1;
            }
        }
    }

    return matrix;
}
