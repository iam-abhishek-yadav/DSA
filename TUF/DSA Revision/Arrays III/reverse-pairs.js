class Solution {
  reversePairs(nums) {
    let count = 0;

    function mergeSort(arr) {
      if (arr.length <= 1) return arr;

      let mid = Math.floor(arr.length / 2);
      let left = mergeSort(arr.slice(0, mid));
      let right = mergeSort(arr.slice(mid));

      let j = 0;
      for (let i = 0; i < left.length; i++) {
        while (j < right.length && left[i] > 2 * right[j]) {
          j++;
        }
        count += j;
      }

      return merge(left, right);
    }

    function merge(left, right) {
      let merged = [];
      let i = 0,
        j = 0;

      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          merged.push(left[i++]);
        } else {
          merged.push(right[j++]);
        }
      }

      return merged.concat(left.slice(i)).concat(right.slice(j));
    }

    mergeSort(nums);
    return count;
  }
}
