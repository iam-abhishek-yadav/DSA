class Solution {
  minCost(s, t, transform, cost) {
    if (s.length !== t.length) return -1;

    const ALPH = 26;
    const INF = 1e9;

    const dist = Array.from({ length: ALPH }, () => Array(ALPH).fill(INF));
    for (let i = 0; i < ALPH; ++i) dist[i][i] = 0;

    for (let i = 0; i < transform.length; ++i) {
      const [fromChar, toChar] = transform[i];
      const c = cost[i];
      const u = fromChar.charCodeAt(0) - 97;
      const v = toChar.charCodeAt(0) - 97;
      if (c < dist[u][v]) dist[u][v] = c;
    }

    for (let k = 0; k < ALPH; ++k) {
      for (let i = 0; i < ALPH; ++i) {
        if (dist[i][k] === INF) continue;
        for (let j = 0; j < ALPH; ++j) {
          const via = dist[i][k] + dist[k][j];
          if (via < dist[i][j]) dist[i][j] = via;
        }
      }
    }

    let total = 0;
    const n = s.length;

    for (let i = 0; i < n; ++i) {
      const a = s.charCodeAt(i) - 97;
      const b = t.charCodeAt(i) - 97;

      if (a === b) continue;

      // try every target char c
      let best = INF;
      for (let c = 0; c < ALPH; ++c) {
        const costA = dist[a][c];
        const costB = dist[b][c];
        if (costA < INF && costB < INF) {
          const candidate = costA + costB;
          if (candidate < best) best = candidate;
        }
      }

      if (best === INF) return -1;

      total += best;
    }

    return total;
  }
}