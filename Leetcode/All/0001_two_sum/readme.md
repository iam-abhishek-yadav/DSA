# 1. Two Sum

Given an array of integers and a target value, find the indices of two distinct numbers whose sum equals the target. Exactly one valid pair exists.

### Constraints
- 2 ≤ nums.length ≤ 10⁴  
- −10⁹ ≤ nums[i] ≤ 10⁹  
- −10⁹ ≤ target ≤ 10⁹  
- Exactly one valid solution exists

### Approach
Use a hash map to efficiently track previously seen numbers.  
For each number, calculate the complement (`target - number`).  
If the complement exists in the map, return both indices.

### Algorithm
1. Create an empty map to store numbers and their indices.  
2. Iterate over the array from the first to the last element.  
3. For the current element:  
   - Compute the complement as `target - current element`.  
   - Check if the complement exists in the map.  
     - If it exists, return the index from the map and the current index.  
   - Otherwise, add the current element and its index to the map.  
4. Return an empty result if no pair is found (though the problem guarantees one).

### Complexity
- **Time Complexity:** O(n) — Each element is processed once, and map lookups/inserts take O(1) on average.  
- **Space Complexity:** O(n) — In the worst case, all elements are stored in the map.

