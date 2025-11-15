class Solution {
  quickSort(arr) {
    function sort(arr, low, high) {
      if (low < high) {
        let pivotIndex = partition(arr, low, high);

        sort(arr, low, pivotIndex - 1);
        sort(arr, pivotIndex + 1, high);
      }
    }

    function partition(arr, low, high) {
      let pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }

      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    }

    sort(arr, 0, arr.length - 1);
    return arr;
  }
}
