class Solution {
    factorial(N) {
        if(N === 0) return 1;
        return N * this.factorial(N-1);
    }
}