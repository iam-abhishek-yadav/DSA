    class Solution {
        reverse(arr, n) {
            function helper(left, right) {
                if (left >= right) return;
                [arr[left], arr[right]] = [arr[right], arr[left]];
                helper(left + 1, right - 1);
            }
            helper(0, n - 1);
        }
    }
