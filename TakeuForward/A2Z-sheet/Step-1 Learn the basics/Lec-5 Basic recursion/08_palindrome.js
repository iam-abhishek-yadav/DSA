class Solution {
    palindromeCheck(s) {
        function helper(left, right) {
            if (left >= right) return true;
            if(s[left] !== s[right]) return false;
            return helper(left+1, right-1)
        }
        return helper(0, s.length - 1);
    }
}