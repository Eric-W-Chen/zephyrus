function reverseString(str) {
  // Guard clause
  if (typeof str !== "string") {
    console.error("Please input a valid string");
    return;
  }

  // Convert the string into an array (since strings are immutable in JavaScript)
  let reversedArr = str.split("");

  let left = 0,
    right = reversedArr.length - 1;

  // Use two-pointer technique to reverse the array in place
  while (left < right) {
    [reversedArr[left], reversedArr[right]] = [
      reversedArr[right],
      reversedArr[left],
    ]; // Swap characters
    left++;
    right--;
  }

  // Convert the array back into a string and return the result
  return reversedArr.join("");
}

console.log(reverseString("hello"));

/* Complexity Analysis:
- Time Complexity: O(n) as each character is visited once.
- Space Complexity: O(n) for the array created by `split()`, but only O(1) additional space is required for the two pointers.


To approach reversing a string, we had three approaches to choose from:
1. Built-In Methods:
   - Using `split()`, `reverse()`, and `join()` provides a straightforward solution with O(n) time complexity.
   - However, intermediate arrays created by `split()` and `reverse()` add O(n) space overhead, making it less efficient in terms of memory usage.

2. Manual Iterative Approach:
   - Concatenating characters in a loop is inefficient in JavaScript because strings are immutable.
   - Each concatenation creates a new string, requiring O(k) time for a string of length k. Repeating this n times results in a worst-case time complexity of O(n^2).
   - Space complexity is O(n), but memory overhead is unnecessarily high due to repeated allocations.

3. Two-Pointer Approach:
   - This approach uses two pointers to reverse the array in place, with a time complexity of O(n).
   - Space complexity is O(1) beyond the initial array creation, as only two extra variables are used for the pointers.
   - This makes the two-pointer technique the most efficient in terms of both time and memory.


Key Considerations:
- Immutability of Strings:
   - In JavaScript, strings are immutable, meaning they cannot be modified directly. This requires converting the string into an array for in-place modifications.
- Efficiency:
   - The two-pointer approach iterates through the string once, performing constant-time swaps. This ensures consistent O(n) time complexity with minimal space usage.

   
Edge Cases:
1. Non-String Input:
  - Problem: The function expects a string, but users might pass other data types (e.g., numbers, arrays, objects).
  - Solution: A guard clause checks if the input is a string using `typeof`. If not, an error message is logged, and the function exits early.

2. Empty String:
  - Problem: An empty string is a valid input, and the function should handle it gracefully without errors.
  - Solution: The function processes the string as usual. `split("")` returns an empty array, and no iterations occur in the `while` loop.
               The function then joins the empty array back into an empty string and returns it.

3. Single-Character String:
  - Problem: A single-character string doesn’t need reversing, but the function should still return the input unchanged.
  - Solution: The `while` loop condition (`left < right`) ensures no swaps are attempted for strings of length 1, as `left === right`.

4. Strings with Special Characters or Whitespac:
  - Problem: Strings containing special characters (e.g., punctuation, symbols) or whitespace should be reversed correctly.
  - Solution: Special characters and whitespace are treated like any other character by the two-pointer approach.

5. Unicode Character:
  - Problem: Certain Unicode characters (e.g., emojis or multibyte characters) are represented using multiple 16-bit code units in JavaScript. These characters might not reverse correctly if treated as single bytes.
  - Solution: The `split("")` method handles Unicode characters properly, as it splits the string by visual characters rather than bytes. This ensures that multibyte characters remain intact during reversal.


Decision:
- The split(), reverse(), and join() methods provide a straightforward solution with O(n) time complexity.
However, each method creates a new array or string, resulting in multiple intermediate memory allocations. While the space complexity remains O(n), this makes it slightly less optimal than the two-pointer approach.
Given the goal of finding the most optimized solution, this method was not chosen.

- With the manual iterative approach, concatenating a string in JavaScript is inefficient due to string immutability. Each concatenation creates a new string in memory, requiring O(k) time to copy, where k is the current length of the new string.
Performing this operation n times results in a worst-case time complexity of O(n^2). Although the space complexity is O(n), repeated memory allocations introduce significant overhead, making this method less efficient.

- The two-pointer technique iterates through the string once, achieving a reliable O(n) time complexity.
Each iteration involves a simple swap operation, which takes O(1) time.
While the split() method requires O(n) space to convert the string into an array, the two-pointer method itself only uses two extra variables, adding O(1) space.
This approach balances optimal time complexity with minimal memory usage, making it the most efficient solution.


Challenge:
The main challenge was considering JavaScript's immutable string nature, which necessitated converting the string into a mutable data structure (an array). Once this was addressed, the two-pointer technique provided a clean and efficient solution. */
