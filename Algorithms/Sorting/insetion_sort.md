Insertion Sort is a simple, intuitive sorting algorithm, useful for small datasets and nearly sorted data. The algorithm builds the sorted list one item at a time by comparing each element with the elements before it and inserting it in the correct position.

#### How Insertion Sort Works

1. Start from the second element (index 1) of the array.
2. Compare the current element with the elements to its left.
3. Swap or shift elements one by one to the right, until you reach the correct position for the current element.
4. Repeat the process for all elements up to the end of the array.

#### Key Properties

- **Time Complexity:**
  - Best case: O(n) (when the array is already sorted)
  - Average & Worst case: O(n²)
- **Space Complexity:** O(1) (in-place)
- **Stable:** Yes (does not change the relative order of equal elements)
- **Adaptive:** Yes (efficient for lists that are already substantially sorted)

#### Example Walkthrough

For array: `[5, 2, 4, 6, 1, 3]`

1. Start with 2 (index 1): Insert 2 before 5 -> `[2, 5, 4, 6, 1, 3]`
2. Next, 4 (index 2): Insert 4 between 2 and 5 -> `[2, 4, 5, 6, 1, 3]`
3. Next, 6 (index 3): Already in place -> `[2, 4, 5, 6, 1, 3]`
4. Next, 1 (index 4): Insert at beginning -> `[1, 2, 4, 5, 6, 3]`
5. Next, 3 (index 5): Insert between 2 and 4 -> `[1, 2, 3, 4, 5, 6]`

#### Pseudocode

```
for i from 1 to n-1:
    j = i
    while j > 0 and array[j] < array[j - 1]:
        swap array[j] and array[j - 1]
        j = j - 1
```

#### When To Use

- Small or nearly sorted datasets
- When memory space is limited
- When stability is required
