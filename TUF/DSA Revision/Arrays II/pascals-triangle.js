class Solution {
  pascalTriangleIII(n) {
    const triangle = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      let ans = 1;
      for (let j = 0; j <= i; j++) {
        row.push(ans);
        ans = (ans * (i - j)) / (j + 1);
      }
      triangle.push(row);
    }
    return triangle;
  }
}
