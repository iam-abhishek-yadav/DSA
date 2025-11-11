# 2. Add Two Numbers

Given two non-empty linked lists representing non-negative integers, where digits are stored in reverse order, add the two numbers and return the result as a linked list.

### Constraints
- Each list has between 1 and 100 nodes  
- `0 <= Node.val <= 9`  
- The numbers contain no leading zeros (except the number 0 itself)

### Approach
Simulate manual addition from least significant to most significant digit.  
At each step, sum the digits from both lists and any carry from the previous step.  
Create a new node for each resulting digit.

### Algorithm
1. Initialize a dummy node to simplify list construction.  
2. Maintain a `current` pointer and a `carry` variable (set to 0).  
3. While `l1`, `l2`, or `carry` are non-empty/non-zero:  
   - Read values from `l1` and `l2` (use 0 if null).  
   - Compute `sum = val1 + val2 + carry`.  
   - Update `carry = sum / 10`.  
   - Create a new node with value `sum % 10` and link it to the result.  
   - Move pointers forward.  
4. Return the next of the dummy node as the result list.

### Complexity
- **Time Complexity:** O(max(n, m)) — Each node is processed once.  
- **Space Complexity:** O(max(n, m)) — For the result linked list.
