class Solution {
    fib(n) {
        if(n === 0) return 0;
        if(n <=2) return 1
        return this.fib(n-1) + this.fib(n-2)
    }
}