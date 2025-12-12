class Solution {
    transpose(mat) {
        const n = mat.length;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let temp = mat[i][j];
                mat[i][j] = mat[j][i];
                mat[j][i] = temp;
            }
        }

        return mat;
    }
}
