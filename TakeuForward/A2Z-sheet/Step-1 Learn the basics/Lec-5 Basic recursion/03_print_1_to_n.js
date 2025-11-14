class Solution {
    printNumbers(n) {
        if(n === 0) return;
        this.printNumbers(n - 1);
        console.log(n)
    }
}