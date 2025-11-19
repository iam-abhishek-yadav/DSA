class Solution {
    minCostPath(mat) {
        const n = mat.length;
        const m = mat[0].length;

        const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
        
        const canReach = (mid) => {
            let q = [[0,0]];
            let visited = Array.from({length: n}, () => Array(m).fill(false));
            visited[0][0] = true;

            while (q.length > 0) {
                const [x, y] = q.shift();

                if (x === n - 1 && y === m - 1) return true;

                for (let [dx, dy] of dirs) {
                    const nx = x + dx, ny = y + dy;
                    if (
                        nx >= 0 && nx < n &&
                        ny >= 0 && ny < m &&
                        !visited[nx][ny] &&
                        Math.abs(mat[nx][ny] - mat[x][y]) <= mid
                    ) {
                        visited[nx][ny] = true;
                        q.push([nx, ny]);
                    }
                }
            }
            return false;
        };

        let low = 0, high = 1_000_000;

        while (low < high) {
            const mid = Math.floor((low + high) / 2);

            if (canReach(mid)) high = mid;
            else low = mid + 1;
        }

        return low;
    }
}
