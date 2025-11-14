class Solution {
    printNumbers(n) {
        if(n === 0) return;
        console.log(n)
        this.printNumbers(n - 1);
    }
}